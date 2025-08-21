import type { ReactNode } from "react";
import type { GestureResponderEvent } from "react-native";

export type ButtonKind = "primary" | "secondary";

export interface KeyboardButtonProps {
	onPress?: (event: GestureResponderEvent) => void;
	onLongPress?: (event: GestureResponderEvent) => void;
	children: ReactNode;
	kind?: ButtonKind;
	/** Количество клеточек, которое занимает кнопочка в высоту */
	takes?: 1 | 2;
}
