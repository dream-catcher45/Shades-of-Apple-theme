"use strict";
exports.__esModule = true;
var path = require("path");
var vscode_theme_generator_1 = require("vscode-theme-generator");
var themeName = 'Shades of Apple';
var colors = {
    black: '#001524',
    white: '#FFD97D',
    blue: '#AAF683',
    red: '#EE6055',
    green: '#60D394',
    yellow: '#FF9B85'
};
var colorSet = {
    base: {
        background: colors.black,
        foreground: colors.white,
        color1: colors.blue,
        color2: colors.red,
        color3: colors.green,
        color4: colors.yellow
    }
};
(0, vscode_theme_generator_1.generateTheme)(themeName, colorSet, path.join(__dirname, 'theme.json'));
