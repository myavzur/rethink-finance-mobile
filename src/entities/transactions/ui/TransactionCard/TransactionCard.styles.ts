import { Borders } from "@/src/shared/const/Borders";
import { Colors } from "@/src/shared/const/Colors";
import { FontSizes } from "@/src/shared/const/FontSizes";
import { Gaps } from "@/src/shared/const/Gaps";
import { HighlightColors } from "@/src/shared/const/HighlightColors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    backgroundColor: HighlightColors.blue.dimmed
  },

  image: {
    aspectRatio: "1 / 1",
    width: 40,
    height: "auto",
    backgroundColor: HighlightColors.blue.dimmed,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Borders.full,
  },

  image__text: {
    color: HighlightColors.blue.primary,
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
    fontWeight: 600,
  },

  header__amount: {
    fontSize: FontSizes.s14,
    fontWeight: 500,
  },

  footer: {
    fontSize: FontSizes.s12,
    color: Colors.gray1000,
    marginTop: 1,
    fontWeight: 400,
  },
});
