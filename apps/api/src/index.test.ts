import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('api', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('api');
  });
});
