import type { HighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Borders, Gaps } from "@/shared/const";

export const useStyles = (highlightColor: HighlightColor) => useThemeStyles((theme) => {
	const highlight = theme.highlights[highlightColor] ?? "ELECTRIC_GREEN";

	return {
		card: {
      gap: Gaps.g10,
      flexDirection: "row",
      alignItems: "center",
		},
    icon: {
      aspectRatio: "1 / 1",
      width: 40,
      height: "auto",
      backgroundColor: highlight.dimmed,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: Borders.full,
    },
    icon__inline: {
      color: highlight.primary,
    },
	};
});