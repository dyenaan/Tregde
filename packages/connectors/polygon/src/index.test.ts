import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('connector-polygon', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('connector-polygon');
  });
});
