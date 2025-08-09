import type { ValueOf } from "@/shared/types";

export const MathAction = {
	DIGIT: "digit",
	ADD: "add",
	SUB: "sub",
	DIVIDE: "div",
	MULTIPLY: "mul",
	PERCENT: "percent",
	CLEAR: "clear",
	BACKSPACE: "backspace",
	DONE: "done",
	DECIMAL: "decimal"  // Добавили новое действие
} as const;

export const MathOperator = {
	ADD: "+",
	SUB: "-",
	DIVIDE: "/",
	MULTIPLY: "*",
	PERCENT: "%"
} as const;

export type IMathOperator = ValueOf<typeof MathOperator>;

export interface IAction<T extends string> {
	type: T;
}

export interface IDigitAction extends IAction<typeof MathAction.DIGIT>{
	payload: {
		digit: number;
	};
}

type IDecimalSeparator = "," | ".";

export interface IDecimalAction extends IAction<typeof MathAction.DECIMAL> {
	payload: {
		separator: IDecimalSeparator;  // Учитываем разные форматы десятичных разделителей
	};
}

export interface IAddAction extends IAction<typeof MathAction.ADD> {
	payload: {
		operator: "+"
	}
}

export interface ISubAction extends IAction<typeof MathAction.SUB> {
	payload: {
		operator: "-"
	}
}

export interface IDivideAction extends IAction<typeof MathAction.DIVIDE> {
	payload: {
		operator: "/"
	}
}

export interface IMultiplyAction extends IAction<typeof MathAction.MULTIPLY> {
	payload: {
		operator: "*"
	}
}

export interface IPercentAction extends IAction<typeof MathAction.PERCENT> {
	payload: {
		operator: "%"
	}
}

export type IClearAction = IAction<typeof MathAction.CLEAR>;
export type IBackspaceAction = IAction<typeof MathAction.BACKSPACE>;
export type IDoneAction = IAction<typeof MathAction.DONE>;

export type IMathAction =
	| IDigitAction
	| IAddAction
	| ISubAction
	| IDivideAction
	| IMultiplyAction
	| IPercentAction
	| IClearAction
	| IBackspaceAction
	| IDoneAction
	| IDecimalAction;