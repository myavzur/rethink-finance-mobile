import { HighlightColor, type IHighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks/use-theme-styles";

import { Font, Gaps } from "@/shared/const";
import { Borders } from "@/shared/const/borders";

export const useStyles = (highlightColor: IHighlightColor) =>
	useThemeStyles((theme) => {
		const highlight =
			theme.highlights[highlightColor] ?? HighlightColor.ELECTRIC_GREEN;

		return {
			card: {
				flexDirection: "row",
				alignItems: "center",
				paddingHorizontal: Gaps.g15,
				paddingVertical: Gaps.g10,
				gap: Gaps.g10,
				fontSize: Font.size.s12,
				borderRadius: Borders.b10
			},
			card_active: {
				backgroundColor: highlight.dimmed
			},
			transaction: {
				flexGrow: 1
			},
			header: {
				flexDirection: "row",
				justifyContent: "space-between"
			},
			header__title: {
				fontSize: Font.size.s14,
				fontWeight: Font.weight.semiBold
			},
			header__amount: {
				fontSize: Font.size.s14,
				fontWeight: 500
			},
			footer: {
				fontSize: Font.size.s12,
				color: theme.colors.gray[1000],
				marginTop: 1,
				fontWeight: 400
			}
		};
	});
