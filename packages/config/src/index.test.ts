import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('config', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('config');
  });
});
