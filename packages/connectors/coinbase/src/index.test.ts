import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('connector-coinbase', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('connector-coinbase');
  });
});
