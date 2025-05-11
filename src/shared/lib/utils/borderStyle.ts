import type { ColorValue, ViewStyle } from "react-native";

export const borderStyle = (
  width: number,
  style: "solid" | "dotted" | "dashed",
  color: ColorValue
): ViewStyle => ({
  borderWidth: width,
  borderStyle: style,
  borderColor: color,
});
