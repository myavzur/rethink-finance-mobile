import type { FC } from "react";
import { Pressable, Text } from "react-native";

import type { ButtonProps } from "./Button.props";
import { useStyles } from "./Button.styles";

export const Button: FC<ButtonProps> = ({ kind, children, onPress }) => {
	const styles = useStyles(kind);

	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.button_pressed]}
			onPress={onPress}
		>
			{({ pressed }) => (
				<Text style={[styles.text, pressed && styles.text_pressed]}>{children}</Text>
			)}
		</Pressable>
	);
};
