import { type IMathOperator, MathOperator } from "@/features/math-keyboard/lib/utils";

export class CharValidatorService {
	// For O(1) search
	private mathOperators = new Set<IMathOperator>([
		MathOperator.ADD,
		MathOperator.SUB,
		MathOperator.MULTIPLY,
		MathOperator.DIVIDE,
		MathOperator.PERCENT
	]);

	public isOperator = (char: string) => {
		return this.mathOperators.has(char as IMathOperator);
	};

	public isDigit = (char: string) => {
		return Number.isInteger(parseInt(char, 10));
	}

	public isDecimalSeparator = (char: string) => {
		return char === "." || char === ",";
	};

	public getLastChar = (str: string) => {
		return str.at(-1) ?? "";
	};

	public replaceLastChar = (str: string, char: string | number) => {
		return str.replace(/.$/, String(char));
	}
}