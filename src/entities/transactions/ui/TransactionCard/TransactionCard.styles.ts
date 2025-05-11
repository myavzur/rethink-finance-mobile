import type { HighlightColor } from "@/entities/themes/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks/use-theme-styles";
import { Borders } from "@/shared/const/borders";
import { FontSizes } from "@/shared/const/font-sizes";
import { FontWeights } from "@/shared/const/font-weights";
import { Gaps } from "@/shared/const/gaps";

export const useStyles = (highlightColor: HighlightColor) => useThemeStyles((theme) => {
  const highlight = theme.highlights[highlightColor] ?? "ELECTRIC_GREEN";

  return {
    card: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      paddingHorizontal: Gaps.g15,
      paddingVertical: Gaps.g10,
      gap: Gaps.g10,
      fontSize: FontSizes.s12,
      borderRadius: Borders.b10
    },
    card_active: {
      backgroundColor: highlight.dimmed
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
    transaction: {
      flexGrow: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    header__title: {
      fontSize: FontSizes.s14,
      fontWeight: FontWeights.w600,
    },
    header__amount: {
      fontSize: FontSizes.s14,
      fontWeight: 500,
    },
    footer: {
      fontSize: FontSizes.s12,
      color: theme.colors.gray[1000],
      marginTop: 1,
      fontWeight: 400,
    },
  }
});
