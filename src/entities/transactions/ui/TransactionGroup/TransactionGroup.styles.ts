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
			color: theme.colors["text-on-background"],
			fontSize: Font.size.s16,
			fontWeight: 600,
		},
		amount: {
			fontSize: Font.size.s16,
			fontWeight: 500,
			color: theme.colors["text-on-background-secondary"],
		},
		list: {
			gap: Gaps.g10
		}
	}));
