import { useMemo } from "react";
import { useColorScheme } from "react-native";

import { HighlightColor, HighlightColorDark, ThemePalettes } from "../../const";
import { useThemeStore } from "../../stores";

export const useTheme = () => {
	const themeName = useThemeStore((state) => state.theme);
	const deviceColorScheme = useColorScheme();

	const theme = useMemo(() => {
		if (deviceColorScheme === "light") {
			return {
				name: "winter",
				colors: ThemePalettes["winter"],
				highlights: HighlightColor
			};
		} else {
			return {
				name: "eclipse",
				colors: ThemePalettes["eclipse"],
				highlights: HighlightColorDark
			};
		}

		// return {
		// 	name: themeName,
		// 	colors: ThemePalettes[themeName],
		// 	highlights: HighlightColor
		// };
	}, [deviceColorScheme]);

	return theme;
};

export type UseThemeReturnType = ReturnType<typeof useTheme>;
