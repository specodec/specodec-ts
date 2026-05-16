export function pow5bits(e: number): number {
  return Math.floor((e * 1217359) / 524288) + 1;
}

export function log10Pow2(e: number): number {
  return Math.floor((e * 78913) / 262144);
}

export function log10Pow5(e: number): number {
  return Math.floor((e * 732923) / 1048576);
}

export function decimalLength9(v: bigint): number {
  if (v >= 100000000n) return 9;
  if (v >= 10000000n) return 8;
  if (v >= 1000000n) return 7;
  if (v >= 100000n) return 6;
  if (v >= 10000n) return 5;
  if (v >= 1000n) return 4;
  if (v >= 100n) return 3;
  if (v >= 10n) return 2;
  return 1;
}

export function decimalLength17(v: bigint): number {
  if (v >= 10000000000000000n) return 17;
  if (v >= 1000000000000000n) return 16;
  if (v >= 100000000000000n) return 15;
  if (v >= 10000000000000n) return 14;
  if (v >= 1000000000000n) return 13;
  if (v >= 100000000000n) return 12;
  if (v >= 10000000000n) return 11;
  if (v >= 1000000000n) return 10;
  if (v >= 100000000n) return 9;
  if (v >= 10000000n) return 8;
  if (v >= 1000000n) return 7;
  if (v >= 100000n) return 6;
  if (v >= 10000n) return 5;
  if (v >= 1000n) return 4;
  if (v >= 100n) return 3;
  if (v >= 10n) return 2;
  return 1;
}

export function mulShift32(m: bigint, factor: bigint, shift: number): bigint {
  return (m * factor) >> BigInt(shift);
}

export function mulShift64(m: bigint, mul: bigint[], shift: number): bigint {
  const b0 = m * mul[0];
  const b2 = m * mul[1];
  const b0Hi = b0 >> 64n;
  const sum = b0Hi + b2;
  return sum >> BigInt(shift - 64);
}

export function multipleOfPowerOf5_32(value: bigint, q: number): boolean {
  if (q === 0) return true;
  if (q >= 32) return value === 0n;
  let pow5 = 5n;
  for (let i = 1; i < q; i++) pow5 *= 5n;
  return (value % pow5) === 0n;
}

export function multipleOfPowerOf2_32(value: bigint, q: number): boolean {
  if (q === 0) return true;
  if (q >= 32) return value === 0n;
  return (value & ((1n << BigInt(q)) - 1n)) === 0n;
}

export function multipleOfPowerOf5_64(value: bigint, q: number): boolean {
  if (q === 0) return true;
  if (q >= 64) return value === 0n;
  let pow5 = 5n;
  for (let i = 1; i < q; i++) pow5 *= 5n;
  return (value % pow5) === 0n;
}

export function multipleOfPowerOf2_64(value: bigint, q: number): boolean {
  if (q === 0) return true;
  if (q >= 64) return value === 0n;
  return (value & ((1n << BigInt(q)) - 1n)) === 0n;
}
