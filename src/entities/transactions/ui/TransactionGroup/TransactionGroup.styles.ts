import { useThemeStyles } from "@/entities/themes/lib/hooks/use-theme-styles";

import { FontSizes } from "@/shared/const/font-sizes";
import { Gaps } from "@/shared/const/gaps";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		header: {
			flex: 1,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginBottom: Gaps.g10
		},
		date: {
			fontSize: FontSizes.s16,
			fontWeight: 600
		},
		amount: {
			fontSize: FontSizes.s16,
			fontWeight: 500,
			color: theme.colors.gray[1000]
		}
	}));
