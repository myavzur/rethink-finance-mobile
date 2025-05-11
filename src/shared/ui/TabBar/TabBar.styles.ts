import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Borders, FontSizes, Gaps } from "@/shared/const";

export const useStyles = () =>
  useThemeStyles((theme) => ({
    navigation: {
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

    item: {
      paddingVertical: Gaps.g15,
      gap: Gaps.g5,
      flex: 1,
			height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },

    label: {
			fontSize: FontSizes.s11,
      textAlign: "center",
    },
  }));
