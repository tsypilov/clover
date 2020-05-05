import { FLAT_THEME, ThemeFactory } from "@skbkontur/react-ui";

export const mainColor: string = "#a0ba20";
export const focusColor: string = "#7d901d";
export const hoverColor: string = "#b1cb21";
export const activeColor: string = "#9fb724";
export const whiteColor: string = "#FFFFFF";

const cloverVariables = {
  ...FLAT_THEME,
  btnDefaultBg: whiteColor,
  linkColor: mainColor,
  linkActiveColor: activeColor,
  linkHoverColor: hoverColor,
};

export const CLOVER_THEME = ThemeFactory.create(cloverVariables);
