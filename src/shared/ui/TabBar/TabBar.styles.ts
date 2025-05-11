import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Borders, FontSizes, Gaps } from "@/shared/const";

export const useStyles = () =>
  useThemeStyles((theme) => ({
    tabs: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      bottom: Gaps.g15,
      marginHorizontal: Gaps.g15,
      backgroundColor: theme.colors.white[1000],
      borderRadius: Borders.b20,
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
			overflow: "hidden"
    },

    tabs__item: {
      paddingVertical: Gaps.g15,
      gap: Gaps.g5,
      flex: 1,
			height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    tabs__icon: {
      color: theme.colors.gray[1100]
    },

    tabs__icon_active: {
      color: theme.colors.accent[1000]
    },

    tabs__label: {
			fontSize: FontSizes.s11,
      textAlign: "center",
      color: theme.colors.gray[1100]
    },

    tabs__label_active: {
      color: theme.colors.accent[1000],
    },
  }));
