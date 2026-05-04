import { float32ToString, float64ToString } from '../../src/ryu/ryu_f32.ts';
import { float64ToString as f64ToString } from '../../src/ryu/ryu_f64.ts';
import * as fs from 'fs';
import * as path from 'path';

const BASE = __dirname;

function loadTests(filename: string): string[] {
  return fs.readFileSync(path.join(BASE, filename), 'utf-8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#'));
}

function loadExpected(filename: string): string[] {
  return fs.readFileSync(path.join(BASE, filename), 'utf-8')
    .split('\n')
    .filter(l => l.trim());
}

let passed = 0, failed = 0;

console.log('=== Float32 Original (125 tests) ===');
const f32Input = loadTests('test_cases_f32.txt');
const f32Expected = loadExpected('expected_f32.txt');
for (let i = 0; i < f32Input.length && i < f32Expected.length; i++) {
  const input = parseFloat(f32Input[i]);
  const result = float32ToString(input);
  if (result === f32Expected[i]) {
    passed++;
  } else {
    failed++;
    if (failed <= 5) console.log(`FAIL: ${f32Input[i]} => ${result} (expected ${f32Expected[i]})`);
  }
}
console.log(`${passed}/${f32Input.length}\n`);

console.log('=== Float64 Original (102 tests) ===');
const f64Input = loadTests('test_cases_f64.txt');
const f64Expected = loadExpected('expected_f64.txt');
let f64Pass = 0, f64Fail = 0;
for (let i = 0; i < f64Input.length && i < f64Expected.length; i++) {
  const input = parseFloat(f64Input[i]);
  const result = f64ToString(input);
  if (result === f64Expected[i]) {
    f64Pass++;
    passed++;
  } else {
    f64Fail++;
    failed++;
    if (f64Fail <= 5) console.log(`FAIL: ${f64Input[i]} => ${result} (expected ${f64Expected[i]})`);
  }
}
console.log(`${f64Pass}/${f64Input.length}\n`);

console.log('=== Float32 Coverage (78 tests) ===');
const covInputRaw = fs.readFileSync(path.join(BASE, 'test_cases_table_coverage.txt'), 'utf-8')
  .split('\n')
  .filter(l => l.trim() && l[0].match(/\d/));
const covExpected = loadExpected('expected_table_coverage.txt');
let covPass = 0, covFail = 0;
for (let i = 0; i < covInputRaw.length && i < covExpected.length; i++) {
  const input = parseFloat(covInputRaw[i].split('#')[0].trim());
  const result = float32ToString(input);
  if (result === covExpected[i]) {
    covPass++;
    passed++;
  } else {
    covFail++;
    failed++;
    if (covFail <= 5) console.log(`FAIL: ${covInputRaw[i].split('#')[0].trim()} => ${result} (expected ${covExpected[i]})`);
  }
}
console.log(`${covPass}/${Math.min(covInputRaw.length, covExpected.length)}\n`);

console.log('=== Float64 Coverage (616 tests) ===');
const f64CovInputRaw = fs.readFileSync(path.join(BASE, 'test_cases_f64_table_coverage.txt'), 'utf-8')
  .split('\n')
  .filter(l => l.trim() && l[0].match(/\d/));
const f64CovExpected = loadExpected('expected_f64_table_coverage.txt');
let f64CovPass = 0, f64CovFail = 0;
for (let i = 0; i < f64CovInputRaw.length && i < f64CovExpected.length; i++) {
  const input = parseFloat(f64CovInputRaw[i].split('#')[0].trim());
  const result = f64ToString(input);
  if (result === f64CovExpected[i]) {
    f64CovPass++;
    passed++;
  } else {
    f64CovFail++;
    failed++;
    if (f64CovFail <= 5) console.log(`FAIL: ${f64CovInputRaw[i].split('#')[0].trim()} => ${result} (expected ${f64CovExpected[i]})`);
  }
}
console.log(`${f64CovPass}/${Math.min(f64CovInputRaw.length, f64CovExpected.length)}\n`);

const total = passed + failed;
console.log(`=== TOTAL: ${passed}/${total} ===`);
if (failed > 0) process.exit(1);