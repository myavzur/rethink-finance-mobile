import { useThemeStyles } from "@/entities/themes/lib/hooks/use-theme-styles";
import { Borders } from "@/shared/const/borders";
import { FontSizes } from "@/shared/const/font-sizes";
import { FontWeights } from "@/shared/const/font-weights";
import { Gaps } from "@/shared/const/gaps";

export const useStyles = () => useThemeStyles((theme) => ({
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
    backgroundColor: theme.highlights.blue.dimmed
  },
  image: {
    aspectRatio: "1 / 1",
    width: 40,
    height: "auto",
    backgroundColor: theme.highlights.blue.dimmed,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Borders.full,
  },
  image__text: {
    color: theme.highlights.blue.primary,
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
}));
