import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { FontSizes, Gaps } from "@/shared/const";

export const useStyles = () => useThemeStyles((theme) => ({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: Gaps.g10,
	},
	date: {
		fontSize: FontSizes.s16,
		fontWeight: 600,
	},
	amount: {
		fontSize: FontSizes.s16,
		fontWeight: 500,
		color: theme.colors.gray[1000],
	},
}));
