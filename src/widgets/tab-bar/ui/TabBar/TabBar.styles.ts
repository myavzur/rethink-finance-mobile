import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Gaps } from "@/shared/const";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		navigation: {
			flexDirection: "row",
			alignItems: "center",
			position: "absolute",
			bottom: Gaps.mainLayoutVertical,
			marginHorizontal: Gaps.mainLayoutHorizontal,
			backgroundColor: theme.colors.background,
			borderRadius: Borders.b20,
			boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)"
		},
		control: {
			position: "relative",
			bottom: "40%"
		}
	}));
