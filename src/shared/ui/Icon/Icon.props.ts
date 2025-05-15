import FeatherIcons from "@expo/vector-icons/Feather";
import { type SymbolWeight } from "expo-symbols";
import { type ComponentProps } from "react";
import type { OpaqueColorValue, StyleProp, TextStyle } from "react-native";

export type IconName = ComponentProps<typeof FeatherIcons>["name"];

export interface IconProps {
	name: IconName;
	size?: number;
	color?: string | OpaqueColorValue;
	style?: StyleProp<TextStyle>;
	weight?: SymbolWeight;
}
