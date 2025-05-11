type WhiteShades = 1000;
type GrayShades = 1100 | 1000;
type AccentShades = 1000;

export interface ColorPalette {
	white: Record<WhiteShades, string>;
	gray: Record<GrayShades, string>;
	accent: Record<AccentShades, string>;
}

export type ColorShade<P extends keyof ColorPalette> = Extract<keyof ColorPalette[P], number>;
export type ColorPath<P extends keyof ColorPalette> = `${P}-${ColorShade<P>}`;

export interface IThemePalettes {
	winter: ColorPalette;
	eclipse: ColorPalette;
}
