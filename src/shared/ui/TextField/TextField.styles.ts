import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Font, Gaps } from "@/shared/const";

export const useStyles = () => useThemeStyles((theme => ({
	field: {
		borderColor: '#B9C4CA',
		borderWidth: 1,
		borderRadius: 4,
	},
	labelContainer: {
		position: "absolute",
		left: 16,
		top: -6,
		paddingHorizontal: Gaps.g10,
		backgroundColor: "white"
	},
	label: {
		fontSize: Font.size.s12
	},
	endIcon: {

	},
	nativeInput: {
		paddingHorizontal: Gaps.g10,
	}
})));