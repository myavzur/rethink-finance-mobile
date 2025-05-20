import type { IThemePalettes } from "../types";

const accentColor = "#7A9E7E"; // Приглушенный зелено-серый
const accentBackgroundColor = "#F2F7F2"; // Очень светлый зеленовато-белый

export const ThemePalettes: IThemePalettes = {
	winter: {
		white: {
			1000: "#ffffff"
		},
		gray: {
			1100: "#bbb5af",
			1000: "#ADADAD"
		},
		accent: {
			1000: accentColor,
			"glassed-1000": accentBackgroundColor
		}
	},
	eclipse: {
		white: {
			1000: "#ffffff"
		},
		gray: {
			1100: "#bbb5af",
			1000: "#ADADAD"
		},
		accent: {
			1000: accentColor,
			"glassed-1000": accentBackgroundColor
		}
	}
} as const;
