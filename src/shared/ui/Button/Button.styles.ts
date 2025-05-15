import type { TextStyle, ViewStyle } from "react-native";

import { useThemeStyles } from "@/entities/themes/lib/hooks";

import { Borders, FontSizes, FontWeights, Gaps } from "@/shared/const";
import { borderStyle } from "@/shared/lib/utils";

import type { ButtonKind } from "./Button.props";

interface ButtonStylesByKind {
	button: ViewStyle;
	text: TextStyle;
}

export const useStyles = (kind: ButtonKind) =>
	useThemeStyles((theme) => {
		const stylesShared: ButtonStylesByKind = {
			button: {
				padding: Gaps.g10,
				alignItems: "center",
				justifyContent: "center",
				borderRadius: Borders.b10,
				paddingVertical: Gaps.g15
			},
			text: {
				fontSize: FontSizes.s14,
				fontWeight: FontWeights.bold
			}
		};

		const stylesByKind: Record<ButtonKind, ButtonStylesByKind> = {
			fill: {
				button: {
					...stylesShared.button,
					backgroundColor: theme.colors.accent[1000]
				},
				text: {
					...stylesShared.text,
					color: theme.colors.white[1000]
				}
			},
			outline: {
				button: {
					...stylesShared.button,
					backgroundColor: theme.colors.white[1000],
					...borderStyle(2, theme.colors.accent[1000])
				},
				text: {
					...stylesShared.text,
					color: theme.colors.accent[1000]
				}
			}
		};

		return stylesByKind[kind] as any;
	});
