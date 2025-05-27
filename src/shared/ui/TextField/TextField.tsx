import type { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { Icon } from "@/shared/ui";

import type { TextFieldProps } from "./TextField.props";
import { useStyles } from "./TextField.styles";

export const TextField: FC<TextFieldProps> = ({ endIcon, label, ...inputProps}) => {
	const styles = useStyles();

	return (
		<View style={styles.field}>
			<TextInput {...inputProps} style={styles.nativeInput} />

			<View style={styles.labelContainer}>
				<Text style={styles.label}>{label}</Text>
			</View>

			{endIcon && (
				<Icon style={styles.endIcon} name={endIcon} />
			)}
		</View>
	);
};
