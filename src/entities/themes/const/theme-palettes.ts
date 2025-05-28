import type { IThemePalettes } from "../types";

const accentColor = "#7A9E7E"; // Приглушенный зелено-серый
const accentBackgroundColor = "#F2F7F2"; // Очень светлый зеленовато-белый

export const ThemePalettes: IThemePalettes = {
	winter: {
		background: "#ffffff",
		"text-on-background": "#000000",
		"text-on-background-secondary": "#adadad",
		utility: {
			error: "#B00020"
		},
		primary: {
			900: "#bbb5af",
		},
		accent: {
			1000: accentColor,
			"glassed-1000": accentBackgroundColor
		}
	},
	eclipse: {
		background: "#333333",
		"text-on-background": "#FFFFFF",
		"text-on-background-secondary": "#adadad",
		utility: {
			error: "#B00020"
		},
		primary: {
			900: "#bbb5af",
		},
		accent: {
			1000: accentColor,
			"glassed-1000": accentBackgroundColor
		}
	}
} as const;
