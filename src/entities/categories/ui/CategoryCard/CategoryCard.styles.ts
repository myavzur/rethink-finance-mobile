import { HighlightColor, type IHighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Font, Gaps } from "@/shared/const";

export const useStyles = (highlightColor: IHighlightColor) =>
	useThemeStyles((theme) => {
		const highlight =
			theme.highlights[highlightColor] ?? HighlightColor.ELECTRIC_GREEN;

		return {
			card: {
				flexDirection: "row",
				flex: 1,
				alignItems: "center",
				// paddingHorizontal: Gaps.g15,
				paddingVertical: Gaps.g10,
				gap: Gaps.g10,
				fontSize: Font.size.s12,
				borderRadius: Borders.b10
			},
			card_active: {
				backgroundColor: highlight.dimmed
			},
			name: {
				fontSize: Font.size.s14,
				fontWeight: Font.weight.regular
			},
			action: {
				marginLeft: "auto"
			},
			action__icon: {
				color: theme.highlights.FIRE_ENGINE_RED.primary
			}
		};
	});
