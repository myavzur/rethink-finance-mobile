import { type IMathOperator } from "@/features/math-keyboard/lib/utils";
import { CharValidatorService } from "@/features/math-keyboard/services";

export class MathExpressionService {
	private readonly charValidatorService = new CharValidatorService();

	public tryInsertDigit = (expression: string, digit: number) => {
		const lastChar = this.charValidatorService.getLastChar(expression);

		// "" and 5 => "5"
		const isExpressionEmpty = expression.length <= 0;
		if (isExpressionEmpty) return expression + digit;

		/* "234-" and 5 => "234-5"
		 * "101+" and 3 => "101+3"
		 * "25/" and 5 => "25/3"
		 * "25*" and 1 => "25*1"
		 */
		const isLastOperator = this.charValidatorService.isOperator(lastChar);
		if (isLastOperator) return expression + digit;

		// "234" and 5 => "2345"
		const isLastDigit = this.charValidatorService.isDigit(lastChar);
		if (isLastDigit) return expression + digit;

		// "234." and 5 => "234.5"
		const isLastDecimalSeparator = this.charValidatorService.isDecimalSeparator(lastChar);
		if (isLastDecimalSeparator) return expression + digit;

		return expression;
	};

	public tryInsertOrReplaceOperator = (
		expression: string,
		operator: IMathOperator
	) => {
		const lastChar = this.charValidatorService.getLastChar(expression);

		// "234+" and "+" => "234+" - nothing changed
		const isSameOperator = lastChar === operator;
		if (isSameOperator) return expression;

		// "234" and "+" => "234+"
		const isLastDigit = this.charValidatorService.isDigit(lastChar);
		if (isLastDigit) return expression + operator;

		// "234-" and "+" => "234+"
		const isLastOperator = this.charValidatorService.isOperator(lastChar);
		if (isLastOperator) {
			return this.charValidatorService.replaceLastChar(expression, operator);
		}

		// "234." and "+" => "234+"
		const isLastDecimalSeparator = this.charValidatorService.isDecimalSeparator(lastChar);
		if (isLastDecimalSeparator) {
			return this.charValidatorService.replaceLastChar(expression, operator);
		}

		return expression;
	};

	public tryInsertSeparator = (expression: string, separator: string) => {
		const lastChar = this.charValidatorService.getLastChar(expression);

		// "234." and "." => "234." - nothing changed
		const isSameSeparator = lastChar === separator;
		if (isSameSeparator) return expression;

		// "234" and "." => "234."
		const isLastDigit = this.charValidatorService.isDigit(lastChar);
		if (isLastDigit) return expression + separator;

		return expression;
	};

	public deleteLastChar = (expression: string) => {
		return expression.slice(0, -1);
	};
}
