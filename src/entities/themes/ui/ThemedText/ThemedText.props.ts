import type { TextProps } from "react-native";

import { FontSizes, FontWeights } from "@/shared/const";
import type { ColorPalette, ColorPath } from "../../types";

export type ThemedTextProps<P extends keyof ColorPalette> = TextProps & {
	color?: ColorPath<P>;
	size?: keyof typeof FontSizes;
	weight?: keyof typeof FontWeights;
};
