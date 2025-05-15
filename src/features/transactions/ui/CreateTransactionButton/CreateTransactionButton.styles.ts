import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Gaps } from "@/shared/const";
import { borderStyle } from "@/shared/lib/utils";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		button: {
			padding: Gaps.g10,
			borderRadius: Borders.full,
			backgroundColor: theme.colors.accent[1000],
			...borderStyle(5, theme.colors.white[1000])
		},
		button_pressed: {
			backgroundColor: theme.colors.accent[1000]
		}
	}));
