import { describe, expect, it } from 'vitest';
import { packageName } from './index';

describe('news-ingestor', () => {
  it('exposes its package name', () => {
    expect(packageName).toBe('news-ingestor');
  });
});
