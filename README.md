# Editor Tab Save Context Menu

> Note: This extension only works in Visual Studio Code or Visual Studio Code - Insiders.

## Features

This extension adds a new context menu on an Editor tab to Save the file. It's for those of us who, for some reason, like to right click on things rather than press Ctrl+S (or CMD+S on Mac).

## Using

Right click on an Editor tab, choose **Save...**. That editor will be brought to the front and the Save action will be invoked.

![Preview](images/preview.png)


## Packaging

The `repository` field in `package.json` points to `vscode.dev`. Override this to ensure links to artifacts are correct when packaging.

``` bash
 vsce package --baseContentUrl https://github.com/chrisdias/vscode-savecontextmenu/blob/HEAD --baseImagesUrl https://github.com/chrisdias/vscode-savecontextmenu/raw/HEAD
```

## Source Code License

[MIT](LICENSE.md)