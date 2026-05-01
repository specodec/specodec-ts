// fmtFloat32: returns the shortest decimal string that uniquely identifies
// the given float32 value and round-trips back to the same float32 bits.
//
// Algorithm: iterate precision p = 1..9, return the first s = v.toPrecision(p)
// such that Math.fround(parseFloat(s)) === v.
// Float32 has 24 mantissa bits → at most 9 significant decimal digits needed.
//
// TODO: replace body with a Ryu f32 implementation for O(1) performance.
export function fmtFloat32(v: number): string {
  if (Object.is(v, -0)) return "-0";
  for (let p = 1; p <= 9; p++) {
    const s = v.toPrecision(p);
    if (Math.fround(parseFloat(s)) === v) return s;
  }
  return String(v); // unreachable for valid finite float32
}
