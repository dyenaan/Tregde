import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('venue-adapter-hyperliquid', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('venue-adapter-hyperliquid');
  });
});
