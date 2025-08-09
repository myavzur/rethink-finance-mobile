import { useWindowDimensions } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { getStatusBarHeight } from "@/entities/transactions/lib/utils";

import { Gaps } from "@/shared/const";

export const useStyles = (withPaddingBottomForTabbar: boolean) => {
	const dimensions = useWindowDimensions();

	return useThemeStyles((theme) => ({
		layout: {
			minHeight: dimensions.height,
			marginTop: getStatusBarHeight(),
			paddingHorizontal: Gaps.mainLayoutHorizontal,
			paddingBottom: withPaddingBottomForTabbar ? 200 : Gaps.mainLayoutVertical,
			backgroundColor: theme.colors.background
		}
	}));
};
