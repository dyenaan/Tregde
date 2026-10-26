import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('market-rules', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('market-rules');
  });
});
