import { type FC, useMemo } from "react";
import { Pressable, Text } from "react-native";

import type { KeyboardButtonProps } from "./KeyboardButton.props";
import { useStyle } from "./KeyboardButton.styles";

export const KeyboardButton: FC<KeyboardButtonProps> = ({
	children,
	kind,
	onPress,
	onLongPress,
	takes = 1
}) => {
	const styles = useStyle(takes);

	const kindStyles = useMemo(() => {
		if (kind === "primary") {
			return {
				button: styles.button_primary,
				text: styles.text_primary,
				button_active: styles.button_primary_active,
				text_active: styles.text_primary_active
			};
		}

		if (kind === "secondary") {
			return {
				button: styles.button_secondary,
				text: styles.text_secondary,
				button_active: styles.button_secondary_active,
				text_active: styles.text_secondary_active
			};
		}

		// No Extra Styles
		return {
			button: {},
			text: {},
			button_active: styles.button_active,
			text_active: styles.text_active
		};
	}, [kind]);

	return (
		<Pressable
			onPress={onPress}
			onLongPress={onLongPress}
			style={({ pressed }) => [
				styles.button,
				kindStyles.button,
				pressed && kindStyles.button_active
			]}
		>
			{({ pressed }) => (
				<Text
					style={[styles.text, kindStyles.text, pressed && kindStyles.text_active]}
				>
					{children}
				</Text>
			)}
		</Pressable>
	);
};
