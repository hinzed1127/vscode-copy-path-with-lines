# Copy Path with Lines

Copy the active file's name or path, with the selected line range appended — e.g. `watch-run.fish:4-6`.

## Commands

| Command | Example output (lines 4-6 selected) |
| --- | --- |
| `Copy File Name with Line Numbers` | `watch-run.fish:4-6` |
| `Copy Relative Path with Line Numbers` | `scripts/watch-run.fish:4-6` |
| `Copy Absolute Path with Line Numbers` | `/Users/you/project/scripts/watch-run.fish:4-6` |

With no selection, the commands copy just the name or path. A single-line selection appends `:4` instead of a range.

## Suggested keybindings

Add to `keybindings.json`:

```json
[
  {
    "key": "ctrl+shift+alt+cmd+p",
    "command": "copyPathWithLines.copyFileName"
  },
  {
    "key": "alt+cmd+p",
    "command": "copyPathWithLines.copyRelativePath"
  },
  {
    "key": "ctrl+alt+cmd+p",
    "command": "copyPathWithLines.copyAbsolutePath"
  }
]
```
