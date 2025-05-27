import { useWindowDimensions } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";
import { getStatusBarHeight } from "@/entities/transactions/lib/utils";

export const useStyles = () => {
	const dimensions = useWindowDimensions();

	return useThemeStyles((theme) => ({
		layout: {
			minHeight: dimensions.height,
			marginTop: getStatusBarHeight(),
			paddingHorizontal: Gaps.g20,
			paddingBottom: 110,
			backgroundColor: theme.colors.background
		}
	}));
};
