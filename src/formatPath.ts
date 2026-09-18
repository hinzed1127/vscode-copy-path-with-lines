export interface LineSelection {
  start: number;
  end: number;
  endIsLineStart?: boolean;
}

export function formatPathWithLines(
  path: string,
  selection: LineSelection | null
): string {
  if (!selection) {
    return path;
  }

  const effectiveEnd =
    selection.endIsLineStart && selection.end > selection.start
      ? selection.end - 1
      : selection.end;

  if (effectiveEnd <= selection.start) {
    return `${path}:${selection.start}`;
  }

  return `${path}:${selection.start}-${effectiveEnd}`;
}
