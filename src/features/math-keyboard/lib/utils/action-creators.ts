import {
	type IAddAction,
	type IBackspaceAction,
	type IClearAction,
	type IDecimalAction,
	type IDigitAction,
	type IDivideAction,
	type IDoneAction,
	type IMultiplyAction,
	type IPercentAction,
	type ISubAction,
	MathAction, MathOperator
} from "./action-creators.types";

export const digitAction = (digit: number): IDigitAction => ({
	type: MathAction.DIGIT,
	payload: {
		digit
	}
});

export const addAction = (): IAddAction => ({
	type: MathAction.ADD,
	payload: {
		operator: MathOperator.ADD,
	}
});

export const subAction = (): ISubAction => ({
	type: MathAction.SUB,
	payload: {
		operator: MathOperator.SUB
	}
});

export const divideAction = (): IDivideAction => ({
	type: MathAction.DIVIDE,
	payload: {
		operator: MathOperator.DIVIDE
	}
});

export const multiplyAction = (): IMultiplyAction => ({
	type: MathAction.MULTIPLY,
	payload: {
		operator: MathOperator.MULTIPLY
	}
});

export const percentAction = (): IPercentAction => ({
	type: MathAction.PERCENT,
	payload: {
		operator: MathOperator.PERCENT
	}
});

export const clearAction = (): IClearAction => ({
	type: MathAction.CLEAR
});

export const backspaceAction = (): IBackspaceAction => ({
	type: MathAction.BACKSPACE
});

export const decimalAction = (): IDecimalAction => ({
	type: MathAction.DECIMAL,
	payload: {
		separator: "."
	}
});

export const doneAction = (): IDoneAction => ({
	type: MathAction.DONE
});
