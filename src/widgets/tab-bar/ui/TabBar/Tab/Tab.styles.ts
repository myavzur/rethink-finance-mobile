import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Borders, FontSizes, Gaps } from "@/shared/const";

export const useStyles = () => useThemeStyles((theme) => ({
	wrapper: {
		borderRadius: Borders.b20,
		overflow: "hidden",
		flex: 1
	},
	item: {
		paddingVertical: Gaps.g15,
		gap: Gaps.g5,
		flex: 1,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		fontSize: FontSizes.s11,
		textAlign: "center",
	},
}))