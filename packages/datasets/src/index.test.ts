import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('datasets', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('datasets');
  });
});
