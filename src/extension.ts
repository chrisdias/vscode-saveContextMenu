import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    // This extension only works in Visual Studio Code or Visual Studio Code - Insiders. 
    // It is distributed through the Visual Studio Marketplace (https://marketplace.visualstudio.com/),
    // Installing this in any other product is a violation of the Marketplace Terms of Use (https://aka.ms/vsmarketplace-ToU)

    if (!/Visual Studio Code/.test(vscode.env.appName)) {
        vscode.window.showErrorMessage("This extension can only be used with Visual Studio Code. Using it in any other product is a violation of the Visual Studio Marketplace Terms of Use and could cause unexpected behavior, performance, or security issues.",
            { modal: true },
            "Marketplace Terms of Use"
        ).then(selection => {
            if (selection === "Marketplace Terms of Use") {
                vscode.env.openExternal(vscode.Uri.parse("https://aka.ms/vsmarketplace-ToU"));
            }
        });
        return;
    }

    context.subscriptions.push(vscode.commands.registerCommand('vscode-savecontextmenu.saveFile', async (uri: vscode.Uri) => {
        const document = await vscode.workspace.openTextDocument(uri);
        const editor = await vscode.window.showTextDocument(document);
        if (editor.document.uri.toString() === uri.toString()) {
            editor.document.save();
        }
    }));
}

export function deactivate() { }
