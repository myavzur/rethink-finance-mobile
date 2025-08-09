import { useThemeStyles } from "@/entities/themes/lib/hooks";



import { Borders, Font, Gaps } from "@/shared/const";

export const useStyles = () => useThemeStyles((theme => ({
	field: {
		borderWidth: 1,
		borderRadius: 12,
	},
	labelContainer: {
		position: "absolute",
		left: Gaps.g15,
		paddingHorizontal: Gaps.g5,
		backgroundColor: "#FFFFFF",
	},
	nativeInput: {
		fontSize: Font.size.s15,
		height: 56,
		paddingHorizontal: Gaps.g15,
		fontWeight: Font.weight.semiBold
	},
	error: {
		marginTop: Gaps.g5,
		marginLeft: Gaps.g15,
		fontSize: Font.size.s11,
		color: theme.colors.utility.error,
	}
})));