import { describe, expect, it } from 'vitest';
import { formatPathWithLines } from './formatPath';

describe('formatPathWithLines', () => {
  it('returns just the path when there is no selection', () => {
    expect(formatPathWithLines('watch-run.fish', null)).toBe('watch-run.fish');
  });

  it('appends a single line number for a single-line selection', () => {
    expect(formatPathWithLines('watch-run.fish', { start: 4, end: 4 })).toBe(
      'watch-run.fish:4'
    );
  });

  it('appends a line range for a multi-line selection', () => {
    expect(formatPathWithLines('watch-run.fish', { start: 4, end: 6 })).toBe(
      'watch-run.fish:4-6'
    );
  });

  it('works with a relative path containing directories', () => {
    expect(
      formatPathWithLines('scripts/watch-run.fish', { start: 4, end: 6 })
    ).toBe('scripts/watch-run.fish:4-6');
  });

  it('treats a selection with only a trailing empty line as single-line', () => {
    // e.g. selecting line 4 fully, with the cursor landing at the start of line 5
    expect(formatPathWithLines('watch-run.fish', { start: 4, end: 5, endIsLineStart: true })).toBe(
      'watch-run.fish:4'
    );
  });
});
