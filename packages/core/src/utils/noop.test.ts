import { describe, it, expect } from 'vitest';
import { noop } from './noop';

describe('noop', () => {
  it('returns undefined', () => {
    expect(noop()).toBeUndefined();
  });
});
