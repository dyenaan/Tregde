import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('control-tower', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('control-tower');
  });
});
