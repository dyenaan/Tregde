import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('connector-news-feeds', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('connector-news-feeds');
  });
});
