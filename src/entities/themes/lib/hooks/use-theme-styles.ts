import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme, type UseThemeReturnType } from "./use-theme";

type StyleSheetReturnType = ReturnType<typeof StyleSheet.create>;
type StyleCreator<T> = (theme: UseThemeReturnType) => T;

export const useThemeStyles = <T extends StyleSheetReturnType>(
  styleCreator: StyleCreator<T>
): T => {
  const theme = useTheme();

  return useMemo(() => {
    const styles = styleCreator(theme);
    return StyleSheet.create(styles);
  }, [styleCreator, theme]);
};