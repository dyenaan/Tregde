import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('shared-types', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('shared-types');
  });
});
