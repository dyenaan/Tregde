import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('strategies', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('strategies');
  });
});
