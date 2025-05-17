import type { IThemePalettes } from "../types";

export interface ThemeStore {
	theme: keyof IThemePalettes;
	setTheme: (theme: keyof IThemePalettes) => void;
}
