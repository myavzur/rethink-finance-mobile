import { MathOperator } from "@/features/math-keyboard/lib/utils";
import { MathExpressionService } from "./MathExpression.service";

describe("Сервис MathExpression", () => {
	const service = new MathExpressionService();

	describe("Метод tryInsertDigit", () => {
		describe("Должен корректно дополнять выражение", () => {
			it.each([
				["", 5, "5"],
				["234-", 5, "234-5"],
				["101+", 3, "101+3"],
				["25/", 5, "25/5"],
				["25*", 1, "25*1"],
				["234", 5, "2345"],
				["23.", 9, "23.9"]
			])(`"%s" and %d => "%s"`, (expr, digit, expected) => {
				expect(service.tryInsertDigit(expr, digit)).toBe(expected);
			});
		});
	});

	describe("Метод tryInsertOrReplaceOperator", () => {
		it.each([
			["234+", MathOperator.ADD, "234+"],
			["234", MathOperator.MULTIPLY, "234*"],
			["234*", MathOperator.DIVIDE, "234/"],
			["234/", MathOperator.SUB, "234-"],
			["23.", MathOperator.ADD, "23+"],
			["0.", MathOperator.SUB, "0-"],
			["100.5", MathOperator.SUB, "100.5-"],
			["15+24*23-34/231", MathOperator.ADD, "15+24*23-34/231+"],
			["10*30/15+25*", MathOperator.DIVIDE, "10*30/15+25/"],
		])(`"%s" and %s => "%s"`, (expr, operator, expected) => {
			expect(service.tryInsertOrReplaceOperator(expr, operator)).toBe(expected);
		});
	});

	describe("Метод tryInsertSeparator", () => {
		it.each([
			["234.", ".", "234."],
			["234", ".", "234."],
			["523-", ".", "523-"]
		])(`"%s" and "%s" => "%s"`, (expr, sep, expected) => {
			expect(service.tryInsertSeparator(expr, sep)).toBe(expected);
		});
	});

	describe("deleteLastChar", () => {
		it.each([
			["123", "12"],
			["a", ""],
			["", ""]
		])(`"%s" => "%s"`, (expr, expected) => {
			expect(service.deleteLastChar(expr)).toBe(expected);
		});
	});
});
