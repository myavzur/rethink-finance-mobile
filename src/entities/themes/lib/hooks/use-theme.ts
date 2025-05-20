import { useMemo } from "react";

import { HighlightColor, ThemePalettes } from "../../const";
import { useThemeStore } from "../../stores";

export const useTheme = () => {
	const themeName = useThemeStore((state) => state.theme);

	const theme = useMemo(() => {
		return {
			name: themeName,
			colors: ThemePalettes[themeName],
			highlights: HighlightColor
		};
	}, [themeName]);

	return theme;
};

export type UseThemeReturnType = ReturnType<typeof useTheme>;
