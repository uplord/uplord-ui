import { create } from 'storybook/theming'

export default create({
  base: 'dark',

  fontBase: '"Nunito", sans-serif',
  // fontCode: 'monospace',

  brandTitle: 'Uplord UI',
  brandUrl: 'https://www.themichael.co.uk/',
  brandImage: '/title.svg',
  brandTarget: '_self',

  // colorPrimary: '#dd2121',
  // colorSecondary: '#222',

  // // UI
  appBg: '#191919',
  appContentBg: '#191919',
  // appPreviewBg: '#0d0d0d',
  appBorderColor: '#3d3d3d',
  appBorderRadius: 0,

  // // Text colors
  textColor: '#bdc1c6',
  // textInverseColor: '#0f0',

  // // Toolbar default and active colors
  barTextColor: '#bdc1c6',
  barSelectedColor: '#dd2121',
  barHoverColor: '#dd2121',
  barBg: '#191919',

  // // Form colors
  inputBg: '#191919',
  inputBorder: '#3d3d3d',
  inputTextColor: '#bdc1c6',
  inputBorderRadius: 2,
})
