import { HighlightColor, type IHighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders } from "@/shared/const";

export const useStyles = (highlightColor: IHighlightColor) =>
	useThemeStyles((theme) => {
		const highlight = theme.highlights[highlightColor] ?? HighlightColor.AQUA_BLUE;

		return {
			icon: {
				aspectRatio: "1 / 1",
				height: "auto",
				backgroundColor: highlight.dimmed,
				alignItems: "center",
				justifyContent: "center",
				borderRadius: Borders.full
			},
			icon__inline: {
				color: highlight.primary
			},
		};
	});
