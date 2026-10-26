import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('scoring-worker', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('scoring-worker');
  });
});
