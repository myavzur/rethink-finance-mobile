import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Font, Gaps } from "@/shared/const";

const PADDING_VERTICAL = Gaps.g10;

export const useStyle = (takes: 1 | 2) => {
	const selfHeight = 50 * takes;

	let paddingsHeight = 0;
	if (takes > 1) {
		paddingsHeight = PADDING_VERTICAL * (takes - 1);
	}

	return useThemeStyles(theme => ({
		button: {
			height: selfHeight + paddingsHeight,
			paddingVertical: PADDING_VERTICAL,
			borderWidth: 1,
			borderColor: theme.colors.inputBorder,
			borderRadius: 12,
			borderStyle: "solid",
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			fontSize: Font.size.s16,
			fontWeight: Font.weight.semiBold
		}
	}))
}