import type { IThemePalettes } from "../types";

export const ThemePalettes: IThemePalettes = {
	winter: {
		background: "#ffffff",
		"text-on-background": "#000000",
		"text-on-background-secondary": "#E0E0E0",
		inputPlaceholder: "#585758",
		inputBorder: "#E0E0E0",
		utility: {
			error: "#B00020"
		},
		primary: {
			900: "#bbb5af",
		},
		accent: {
			1000: "#7A9E7E",
			"glassed-1000": "#F2F7F2"
		}
	},
	eclipse: {
		background: "#333333",
		"text-on-background": "#FFFFFF",
		"text-on-background-secondary": "#adadad",
		inputPlaceholder: "#585758",
		inputBorder: "#E0E0E0",
		utility: {
			error: "#B00020"
		},
		primary: {
			900: "#bbb5af",
		},
		accent: {
			1000: "#7A9E7E",
			"glassed-1000": "#444644"
		}
	}
} as const;
