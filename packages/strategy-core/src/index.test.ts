import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('strategy-core', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('strategy-core');
  });
});
