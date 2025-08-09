import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Gaps } from "@/shared/const";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		keyboard: {
			flexDirection: "row",
			gap: Gaps.g10
		},
		keyboard__column: {
			flexDirection: "column",
			flex: 1,
			gap: Gaps.g10
		}
	}));
