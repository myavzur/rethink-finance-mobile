import type { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

import { Icon } from "@/shared/ui";

import type { FastActionProps } from "./FastAction.props";
import { useStyles } from "./FastAction.styles";

export const FastAction: FC<FastActionProps> = ({
	icon,
	label,
	onPress,
	highlightColor
}) => {
	const styles = useStyles(highlightColor || "AMETHYST");

	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.action}
		>
			<Text style={styles.icon}>
				<Icon
					name={icon}
					size={24}
				/>
			</Text>

			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};
