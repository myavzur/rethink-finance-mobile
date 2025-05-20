import { useThemeStyles } from "@/entities/themes/lib/hooks/use-theme-styles";

import { Font, Gaps } from "@/shared/const";

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
			fontSize: Font.size.s16,
			fontWeight: 600
		},
		amount: {
			fontSize: Font.size.s16,
			fontWeight: 500,
			color: theme.colors.gray[1000]
		},
		list: {
			gap: Gaps.g10
		}
	}));
