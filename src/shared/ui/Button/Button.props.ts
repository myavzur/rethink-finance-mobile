export type ButtonKind = "fill" | "outline";

export interface ButtonProps {
	kind: ButtonKind;
	children: string;
	onPress?: () => void;
}
