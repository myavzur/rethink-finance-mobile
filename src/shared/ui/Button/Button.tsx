import type { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

import type { ButtonProps } from "./Button.props";
import { useStyles } from "./Button.styles";

export const Button: FC<ButtonProps> = ({ kind, children, onPress }) => {
	const styles = useStyles(kind);

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
};
