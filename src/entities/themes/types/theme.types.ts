type PrimaryShades = 900;
type AccentShades = 1000 | "glassed-1000";

export interface ColorPalette {
	background: string;
	"text-on-background": string;
	"text-on-background-secondary": string;

	primary: Record<PrimaryShades, string>;
	accent: Record<AccentShades, string>;
}

export interface IThemePalettes {
	winter: ColorPalette;
	eclipse: ColorPalette;
}
