import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('strategy-runner', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('strategy-runner');
  });
});
