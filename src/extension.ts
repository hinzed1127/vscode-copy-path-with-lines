import * as path from 'path';
import * as vscode from 'vscode';
import { formatPathWithLines, LineSelection } from './formatPath';

function getSelection(editor: vscode.TextEditor): LineSelection | null {
  const { selection } = editor;
  if (selection.isEmpty) {
    return null;
  }

  return {
    start: selection.start.line + 1,
    end: selection.end.line + 1,
    endIsLineStart: selection.end.character === 0,
  };
}

async function copyWithLines(getPath: (editor: vscode.TextEditor) => string) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const text = formatPathWithLines(getPath(editor), getSelection(editor));
  await vscode.env.clipboard.writeText(text);
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copyPathWithLines.copyFileName', () =>
      copyWithLines((editor) => path.basename(editor.document.uri.fsPath))
    ),
    vscode.commands.registerCommand('copyPathWithLines.copyRelativePath', () =>
      copyWithLines((editor) =>
        vscode.workspace.asRelativePath(editor.document.uri, false)
      )
    ),
    vscode.commands.registerCommand('copyPathWithLines.copyAbsolutePath', () =>
      copyWithLines((editor) => editor.document.uri.fsPath)
    )
  );
}

export function deactivate() {}
