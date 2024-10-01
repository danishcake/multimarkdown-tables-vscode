// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as mmdTable from "markdown-it-multimd-table";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const settings = vscode.workspace.getConfiguration("multimarkdownTables");
  const config = {
    autolabel: settings.get<boolean>("autolabel"),
    headerless: settings.get<boolean>("headerless"),
    multibody: settings.get<boolean>("multibody"),
    multiline: settings.get<boolean>("multiline"),
    rowspan: settings.get<boolean>("rowspan"),
  };
  return {
    extendMarkdownIt(md: any) {
      md.use(mmdTable.default, config);
      return md;
    },
  };
}

// This method is called when your extension is deactivated
export function deactivate() {}
