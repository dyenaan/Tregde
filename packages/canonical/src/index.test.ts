import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('canonical', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('canonical');
  });
});
