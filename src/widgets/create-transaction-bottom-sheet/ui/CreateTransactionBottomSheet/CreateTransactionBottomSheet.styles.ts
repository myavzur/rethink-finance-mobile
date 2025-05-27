import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Font, Gaps } from "@/shared/const";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		layout: {},
		header: {
			flexDirection: "row",
			alignItems: "center",
		},
		back: {
			padding: Gaps.g5
		},
		title: {
			color: theme.colors["text-on-background"],
			fontSize: Font.size.s16,
			fontWeight: Font.weight.bold
		},
		section: {
			paddingTop: Gaps.g20
		}
	}));
