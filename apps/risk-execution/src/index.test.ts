import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('risk-execution', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('risk-execution');
  });
});
