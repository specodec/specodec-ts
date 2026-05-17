import { float32ToString } from './ryu/ryu-f32.js';
import { float64ToString } from './ryu/ryu-f64.js';

export function formatFloat32(v: number): string {
    return float32ToString(v);
}

export function formatFloat64(value: number): string {
    return float64ToString(value);
}