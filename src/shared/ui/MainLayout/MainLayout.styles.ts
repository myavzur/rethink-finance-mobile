import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Gaps } from "@/shared/const";
import { useWindowDimensions } from "react-native";

export const useStyles = () => {
  const dimensions = useWindowDimensions();

  return useThemeStyles((theme) => ({
    layout: {
      minHeight: dimensions.height,
      paddingHorizontal: Gaps.g20,
      paddingBottom: 100,
      backgroundColor: theme.colors.white[1000],
    },
  }));
}