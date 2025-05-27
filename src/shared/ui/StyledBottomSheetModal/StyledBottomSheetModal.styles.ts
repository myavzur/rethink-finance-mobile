import { StyleSheet } from "react-native";

import { Gaps } from "@/shared/const";
import { useThemeStyles } from "@/entities/themes/lib/hooks";

export const useStyles = () => useThemeStyles((theme) => ({
	sheetBackground: {
		backgroundColor: theme.colors.background
	},
	sheetHandleIndicator: {
		backgroundColor: theme.colors["text-on-background"]
	},
	content: {
		flex: 1,
		padding: Gaps.g20,
	}
}));
