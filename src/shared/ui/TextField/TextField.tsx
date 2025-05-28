import { type FC, useEffect, useMemo, useRef, useState } from "react";
import {
	Animated,
	Easing,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
	useAnimatedValue
} from "react-native";

import { useTheme } from "@/entities/themes/lib/hooks";

import { Font } from "@/shared/const";
import { Icon } from "@/shared/ui";

import type { TextFieldProps } from "./TextField.props";
import { useStyles } from "./TextField.styles";

export const TextField: FC<TextFieldProps> = ({
	endIcon,
	label,
	errorMessage,
	value,
	onFocus,
	onBlur,
	...inputProps
}) => {
	const styles = useStyles();
	const theme = useTheme();

	const inputRef = useRef<TextInput>(null);
	const [isFocused, setIsFocused] = useState(false);

	const color = useMemo(() => {
		if (errorMessage) {
			return theme.colors.utility.error;
		}

		if (isFocused) {
			return theme.colors["text-on-background"];
		}

		return theme.colors["text-on-background-secondary"];
	}, [isFocused, errorMessage]);

	const focusAnimation = useAnimatedValue(0);

	/*
	 ** This effect will trigger the animation every
	 ** time `isFocused` value changes.
	 */
	useEffect(() => {
		const isActiveState = isFocused || Boolean(value);

		Animated.timing(focusAnimation, {
			toValue: isActiveState ? 1 : 0,
			duration: 150,
			easing: Easing.bezier(0.4, 0, 0.2, 1),
			useNativeDriver: true
		}).start();
	}, [focusAnimation, isFocused, value]);

	const handleFocus: TextFieldProps["onFocus"] = (event) => {
		setIsFocused(true);
		onFocus?.(event);
	};

	const handleBlur: TextFieldProps["onBlur"] = (event) => {
		setIsFocused(false);
		onBlur?.(event);
	};

	return (
		<TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
			<View>
				<View
					style={[
						styles.field,
						{
							borderColor: color
						}
					]}
				>
					<TextInput
						{...inputProps}
						value={value}
						onFocus={handleFocus}
						onBlur={handleBlur}
						style={styles.nativeInput}
						ref={inputRef}
					/>

					<Animated.View
						style={[
							styles.labelContainer,
							{
								transform: [
									{
										scale: focusAnimation.interpolate({
											inputRange: [0, 1],
											outputRange: [1, 0.73]
										})
									},
									{
										translateY: focusAnimation.interpolate({
											inputRange: [0, 1],
											outputRange: [14, -16]
										})
									},
									{
										translateX: focusAnimation.interpolate({
											inputRange: [0, 1],
											outputRange: [0, -16]
										})
									}
								]
							}
						]}
					>
						<Text
							style={{
								fontSize: Font.size.s15,
								color
							}}
						>
							{label}
							{Boolean(errorMessage) ? "*" : ""}
						</Text>
					</Animated.View>

					{endIcon && (
						<Icon
							style={styles.endIcon}
							name={endIcon}
						/>
					)}
				</View>

				{Boolean(errorMessage) && <Text style={styles.error}>{errorMessage}</Text>}
			</View>
		</TouchableWithoutFeedback>
	);
};
