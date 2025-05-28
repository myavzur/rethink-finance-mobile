import { useThemeStyles } from "@/entities/themes/lib/hooks";



import { Borders, Font, Gaps } from "@/shared/const";





export const useStyles = () => useThemeStyles((theme => ({
	field: {
		borderColor: theme.colors["text-on-background-secondary"],
		borderWidth: 1,
		borderRadius: Borders.b10,
	},
	labelContainer: {
		position: "absolute",
		left: Gaps.g15,
		paddingHorizontal: Gaps.g5,
		backgroundColor: theme.colors.background
	},
	endIcon: {

	},
	nativeInput: {
		height: 50,
		paddingHorizontal: Gaps.g15,
	},
	error: {
		marginTop: Gaps.g5,
		marginLeft: Gaps.g15,
		fontSize: Font.size.s11,
		color: theme.colors.utility.error,
	}
})));