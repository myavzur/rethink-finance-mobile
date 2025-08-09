import { useThemeStyles } from "@/entities/themes/lib/hooks";
import { Font, Gaps } from "@/shared/const";

export const useStyles = () => useThemeStyles((theme) => ({
	header: {
		fontSize: Font.size.s16,
		fontWeight: Font.weight.semiBold
	},
	fields: {
		flexDirection: "column",
		gap: 12
	},
	keyboard: {
		paddingBottom: Gaps.mainLayoutVertical,
	}
}))