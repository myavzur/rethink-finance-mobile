import type { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import type { KeyboardButtonProps } from "./KeyboardButton.props";
import { useStyle } from "./KeyboardButton.styles";
import { useTheme } from "@/entities/themes/lib/hooks";

export const KeyboardButton: FC<KeyboardButtonProps> = ({ children, kind, onPress, onLongPress, takes = 1 }) => {
	const theme = useTheme();
	const styles = useStyle(takes);

	const kindStyles = {
		button: {},
		text: {}
	};

	if (kind === "primary") {
			kindStyles.button = {
				backgroundColor: theme.colors.accent["1000"],
			}
			kindStyles.text = {
				color: theme.colors.background
			}
	}

	if (kind === "secondary") {
		kindStyles.text = {
			color: theme.colors.accent["1000"]
		}
	}

	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.button, kindStyles.button]}>
			<Text style={[styles.text, kindStyles.text]}>{children}</Text>
		</TouchableOpacity>
	);
};
