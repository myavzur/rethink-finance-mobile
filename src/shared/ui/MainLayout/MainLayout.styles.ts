import { useWindowDimensions } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";
import { getStatusBarHeight } from "@/entities/transactions/lib/utils";

export const useStyles = (withPaddingBottomForTabbar: boolean) => {
	const dimensions = useWindowDimensions();

	return useThemeStyles((theme) => ({
		layout: {
			minHeight: dimensions.height,
			marginTop: getStatusBarHeight(),
			paddingHorizontal: Gaps.mainLayoutHorizontal,
			paddingBottom: withPaddingBottomForTabbar ? 110 : 0,
			backgroundColor: theme.colors.background
		}
	}));
};
