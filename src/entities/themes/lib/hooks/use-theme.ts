import { useMemo } from "react";
import { HighlightColor, ThemePalettes } from "../../const";

export const useTheme = () => {
	const theme = useMemo(() => {
		return {
			name: "Winter",
			colors: ThemePalettes["winter"],
			highlights: HighlightColor
		};
	}, []);

	return theme;
}

export type UseThemeReturnType = ReturnType<typeof useTheme>;