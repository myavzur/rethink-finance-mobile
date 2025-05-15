import type { FC } from "react";
import { Pressable } from "react-native";

import { useTheme } from "@/entities/themes/lib/hooks";

import { Icon } from "@/shared/ui";

import { useStyles } from "./CreateTransactionButton.styles";

export const CreateTransactionButton: FC = () => {
	const theme = useTheme();
	const styles = useStyles();

	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.button_pressed]}
			onPress={console.log}
		>
			<Icon
				size={28}
				name="plus"
				color={theme.colors.white[1000]}
			/>
		</Pressable>
	);
};
