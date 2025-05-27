import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Font, Gaps } from "@/shared/const";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		header: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: Gaps.g10
		},
		date: {
			color: theme.colors["text-on-background"],
			fontSize: Font.size.s16,
			fontWeight: 600
		},
		amount: {
			fontSize: Font.size.s16,
			fontWeight: 500,
			color: theme.colors["text-on-background-secondary"]
		}
	}));
