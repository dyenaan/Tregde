import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('paper-engine', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('paper-engine');
  });
});
