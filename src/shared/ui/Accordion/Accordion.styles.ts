import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, Font, Gaps } from "@/shared/const";

export const useStyles = () =>
	useThemeStyles((theme) => ({
		accordion: {
			// backgroundColor: "red"
		},
		header__line: {
			width: "200%",
			transform: [
				{
					translateX: "-25%"
				}
			],
			height: 1,
			backgroundColor: theme.colors.accent["1000"]
		},
		header__content: {
			flexDirection: "row",
			alignItems: "center",
			gap: Gaps.g10,
			borderRadius: Borders.b10,
			paddingVertical: Gaps["accordion-header"]
		},
		title: {
			fontSize: Font.size.s16,
			fontWeight: Font.weight.semiBold
		},
		content: {
			marginTop: Gaps.g15
		}
	}));
