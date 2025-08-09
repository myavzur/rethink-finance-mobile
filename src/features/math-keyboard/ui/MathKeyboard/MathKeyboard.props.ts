import type { IMathKeyboardAction } from "./MathKeyboard.actions";

export interface MathKeyboardProps {
	onAction: (action: IMathKeyboardAction) => void;
}
