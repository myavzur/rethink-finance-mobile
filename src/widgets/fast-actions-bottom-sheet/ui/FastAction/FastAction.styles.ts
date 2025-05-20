import { HighlightColor, type IHighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Font, Gaps } from "@/shared/const";

export const useStyles = (highlightColor: IHighlightColor) =>
	useThemeStyles((theme) => {
		const highlight =
			theme.highlights[highlightColor] ?? HighlightColor.ELECTRIC_GREEN;

		return {
			action: {
				paddingVertical: Gaps.g15,
				paddingHorizontal: Gaps.g10,
				flexDirection: "row",
				gap: Gaps.g15,
				alignItems: "center",
				borderRadius: Borders.b10
			},
			icon: {
				// color: "#464646"
				color: highlight.primary
			},
			label: {
				color: highlight.primary,
				fontWeight: Font.weight.medium,
				fontSize: Font.size.s16
			}
		};
	});
