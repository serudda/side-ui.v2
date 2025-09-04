import { create } from 'storybook/theming';
import logo from './logo.svg';

export default create({
  base: 'dark',
  brandTitle: 'Side UI',
  brandUrl: 'https://side.ui/',
  brandImage: logo,
  brandTarget: '_self',

  colorPrimary: '#3A10E5',
  colorSecondary: '#1f2937',

   // UI
  appBg: 'oklch(13% .028 261.692)',
  appContentBg: 'oklch(13% .028 261.692)',
  appPreviewBg: 'oklch(13% .028 261.692)',
  appBorderColor: 'rgba(250, 250, 250, 0.1)',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#ffffff',
  textInverseColor: 'oklch(13% .028 261.692)',
 
  // Toolbar default and active colors
  barTextColor: '#475569',
  barSelectedColor: '#9ca3af',
  barHoverColor: '#334155',
  barBg: 'oklch(13% .028 261.692)',
 
  // Form colors
  inputBg: 'oklch(13% .028 261.692)',
  inputBorder: 'rgba(250, 250, 250, 0.1)',
  inputTextColor: 'rgba(250, 250, 250, 0.5)',
  inputBorderRadius: 2,
});
