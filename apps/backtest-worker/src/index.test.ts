import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('backtest-worker', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('backtest-worker');
  });
});
