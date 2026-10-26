import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('connector-contract-tests', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('connector-contract-tests');
  });
});
