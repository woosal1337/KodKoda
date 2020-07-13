import { colors } from '@material-ui/core';
import { gray } from 'color-name';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: "#fefefe",
    dark: "#178EE5",
    main: "#2B9AEA",
    light: "#42a5ec"
  },
  secondary: {
    contrastText: "#fefefe",
    dark: "#FF8604",
    main: "#ff921e",
    light: "#FF9E38"
  },
  languages: {
    c: "#178EE5",
    python: "#2B9AEA" ,
    cpp: "#42a5ec",
    java: "#885FA4",
    javascript:"#178EE5",
    p5js: "#178EE5",
    //javascript: "#15A160",
    //p5js: "#0f7445",
    go: "#F5B50F",
    kotlin: "#f9d371",
    rust: "#FF7BAC",
  },
  success: {
    contrastText: "#fefefe",
    dark: "#015E1D",
    main: "#017725",
    light: "#01902D"
  },
  info: {
    contrastText: "#fefefe",
    dark: colors.grey[600],
    main: colors.grey[400],
    light: colors.grey[200]
  },
  neutral: {
    contrastText: "#fefefe",
    dark: colors.blueGrey[900],
    main: colors.blueGrey[600],
    light: colors.blueGrey[300]
  },
  warning: {
    contrastText: "#fefefe",
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: "#fefefe",
    dark: "#e13b0e",
    main: "#f14617",
    light: "#f2592f"
  },
  text: {
    primary: "#fefefe",
    secondary: "#d7d7d7",
    tertiary: "#b0b0b0",
    link: "#6b6b6b"
  },
  background: {
    //default: "#153647",
    default: "#222947",
    paper: "#1b455b" //%5 lighter of above
  },
  icon: colors.blueGrey[600],
  divider: "#fefefe"
};
