import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('connector-fx-rates', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('connector-fx-rates');
  });
});
