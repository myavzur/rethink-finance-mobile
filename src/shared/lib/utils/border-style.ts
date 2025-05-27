import type { ColorValue, ViewStyle } from "react-native";

export const borderStyle = (
	width: number,
	color: ColorValue,
	style: "solid" | "dotted" | "dashed" = "solid"
): ViewStyle => ({
	borderWidth: width,
	borderStyle: style,
	borderColor: color
});
