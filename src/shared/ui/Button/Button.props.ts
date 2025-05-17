import type { ReactNode } from "react";

export type ButtonKind = "fill" | "outline";

export interface ButtonProps {
	kind: ButtonKind;
	children: ReactNode;
	onPress?: () => void;
}
