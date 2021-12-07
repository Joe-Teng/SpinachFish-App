import { Dimensions } from "react-native";

export const ThemeColor = "#409DF3";
export const ThemeBgColor = ["#838EF8", "#3F87FA"];
export const ThemeLight = "#FFF";
export const ThemeDark = "#000";

/** Screen */
export const ScreenWidth = Dimensions.get("window")?.width;
export const ScreenHeight = Dimensions.get("window")?.height;
export const ScreenPaddingHorizontal = 24;
export const StatusBarHeight = 68;

/** Font */
export const FontS = 12;
export const FontM = 16;
export const FontL = 20;
export const customizeFont = (font: number) => {
  return font;
};
export const FontColor = "#1B1B1B";

/** Input */
export const InputHeight = 52;
export const InputBorderRadius = 4;
export const InputPaddingHorizontal = 16;
export const InputErrorColor = "#1B003B";
export const InputSignInBtnHeight = 50;
export const InputSignInBtnBorderRadius = 28;
export const InputBtnFontStyle = "#FFF";
export const InputSpacing = 24;

/** Button */
export const ButtonActiveOpacity = 0.65;
export const ButtonCircleWidth = 52;
export const ButtonDisabledBgColor = "#CDCDCD";
export const ButtonDisabledFontColor = "#FFF";
