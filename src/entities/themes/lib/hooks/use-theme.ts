import { useMemo } from "react";
import { HighlightColors, ThemePalettes } from "../../const";

export const useTheme = () => {
	const theme = useMemo(() => {
		return {
			name: "Winter",
			colors: ThemePalettes["winter"],
			highlights: HighlightColors
		};
	}, []);

	return theme;
}

export type UseThemeReturnType = ReturnType<typeof useTheme>;