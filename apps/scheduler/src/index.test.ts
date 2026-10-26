import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('scheduler', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('scheduler');
  });
});
