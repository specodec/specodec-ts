import { float32ToString } from '../../src/ryu/ryu_f32.js';
import { float64ToString } from '../../src/ryu/ryu_f64.js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const BASE = dirname(fileURLToPath(import.meta.url));

function parseSpecial(s: string): number {
  switch (s) {
    case 'NaN': return NaN;
    case 'Infinity':
    case '+Infinity': return Infinity;
    case '-Infinity': return -Infinity;
    default: return parseFloat(s);
  }
}

function loadInputLines(filename: string): string[] {
  return readFileSync(join(BASE, filename), 'utf-8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#'));
}

function loadExpectedLines(filename: string): string[] {
  return readFileSync(join(BASE, filename), 'utf-8')
    .split('\n')
    .filter(l => l.trim());
}

function loadCoverageInput(filename: string): string[] {
  return readFileSync(join(BASE, filename), 'utf-8')
    .split('\n')
    .map(l => (l.split('#')[0] ?? '').trim())
    .filter(l => l.length > 0);
}

function runSuite(
  label: string,
  inputFile: string,
  expectedFile: string,
  fn: (v: number) => string,
  inputParser: (filename: string) => string[] = loadInputLines,
): { passed: number; failed: number; total: number } {
  const inputs = inputParser(inputFile);
  const expected = loadExpectedLines(expectedFile);
  const n = Math.min(inputs.length, expected.length);
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < n; i++) {
    const raw = inputs[i];
    const value = parseSpecial(raw);
    const result = fn(value);
    if (result === expected[i]) {
      passed++;
    } else {
      failed++;
      if (failed <= 5) {
        console.log(`  FAIL: ${raw} => ${result} (expected ${expected[i]})`);
      }
    }
  }

  console.log(`${label} (${n} tests) ===`);
  console.log(`${passed}/${n}`);
  console.log();
  return { passed, failed, total: n };
}

let totalPassed = 0;
let totalFailed = 0;
let totalAll = 0;

{
  const r = runSuite('=== Float32 Original', 'test_cases_f32.txt', 'expected_f32.txt', float32ToString);
  totalPassed += r.passed;
  totalFailed += r.failed;
  totalAll += r.total;
}
{
  const r = runSuite('=== Float64 Original', 'test_cases_f64.txt', 'expected_f64.txt', float64ToString);
  totalPassed += r.passed;
  totalFailed += r.failed;
  totalAll += r.total;
}
{
  const r = runSuite('=== Float32 Coverage', 'test_cases_table_coverage.txt', 'expected_table_coverage.txt', float32ToString, loadCoverageInput);
  totalPassed += r.passed;
  totalFailed += r.failed;
  totalAll += r.total;
}
{
  const r = runSuite('=== Float64 Coverage', 'test_cases_f64_table_coverage.txt', 'expected_f64_table_coverage.txt', float64ToString, loadCoverageInput);
  totalPassed += r.passed;
  totalFailed += r.failed;
  totalAll += r.total;
}

console.log(`=== TOTAL: ${totalPassed}/${totalAll} ===`);
if (totalFailed > 0) process.exit(1);
