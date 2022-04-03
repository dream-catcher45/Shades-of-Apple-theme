import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Shades of Apple';
const colors = {
  black: '#001524',
  white: '#FFD97D',
  blue: '#AAF683',
  red: '#EE6055',
  green: '#60D394',
  yellow: '#FF9B85'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
