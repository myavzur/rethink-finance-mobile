import type { IThemePalettes } from "../types";

const accentColor = "#F54298";
const accentBackgroundColor = "#ff2c5e36";

export const ThemePalettes: IThemePalettes = {
	winter: {
		white: {
			1000: "#ffffff"
		},
		gray: {
			1100: "#bbb5af",
			1000: "#ADADAD",
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
			1000: "#ADADAD",
		},
		accent: {
			1000: accentColor,
			"glassed-1000": accentBackgroundColor
		}
	}
} as const;