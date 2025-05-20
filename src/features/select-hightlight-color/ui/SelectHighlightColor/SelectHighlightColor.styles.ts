import { useWindowDimensions } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Gaps } from "@/shared/const";

export const useStyles = () => {
	const { width } = useWindowDimensions();

	return useThemeStyles(() => ({
		list: {
			flexDirection: "row",
			flexWrap: "wrap",
			gap: Gaps.g5
		},
		box: {
			alignItems: "center",
			justifyContent: "center",
			borderRadius: Borders.full,
			width: 45,
			height: 45
		},
		dot: {
			borderRadius: Borders.full,
			width: 20,
			height: 20
		}
	}));
};
