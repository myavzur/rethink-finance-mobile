type PrimaryShades = 900;
type AccentShades = 1000 | 900 | "glassed-1000";

export interface ColorPalette {
	background: string;
	"text-on-background": string;
	"text-on-background-secondary": string;
	inputPlaceholder: string;
	inputBorder: string;

	utility: {
		error: string;
	}

	primary: Record<PrimaryShades, string>;
	accent: Record<AccentShades, string>;
}

export interface IThemePalettes {
	winter: ColorPalette;
	eclipse: ColorPalette;
}
