import { useWindowDimensions } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";

export const useStyles = () => {
	const dimensions = useWindowDimensions();

	return useThemeStyles((theme) => ({
		layout: {
			minHeight: dimensions.height,
			paddingHorizontal: Gaps.g20,
			paddingBottom: 110,
			backgroundColor: theme.colors.white[1000]
		}
	}));
};
