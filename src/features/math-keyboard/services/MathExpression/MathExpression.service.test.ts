import { type IMathOperator, MathOperator } from "@/features/math-keyboard/lib/utils";
import { MathExpressionService } from "./MathExpression.service";

describe("Сервис MathExpression", () => {
	const service = new MathExpressionService();

	describe("Метод tryInsertDigit", () => {
		describe("Должен корректно дополнять выражение", () => {
			const cases: [string, number, string][] = [
				["", 5, "5"],
				["234-", 5, "234-5"],
				["101+", 3, "101+3"],
				["25/", 5, "25/5"],
				["25*", 1, "25*1"],
				["234", 5, "2345"],
				["23.", 9, "23.9"]
			];

			it.each(cases)(`"%s" and %d => "%s"`, (input, digit, expected) => {
				expect(service.tryInsertDigit(input, digit)).toBe(expected);
			});
		});
	});

	describe("Метод tryInsertOrReplaceOperator", () => {
		const cases: [string, IMathOperator, string][] = [
			["234+", MathOperator.ADD, "234+"],
			["234", MathOperator.MULTIPLY, "234*"],
			["234*", MathOperator.DIVIDE, "234/"],
			["234/", MathOperator.SUB, "234-"],
			["23.", MathOperator.ADD, "23+"],
			["0.", MathOperator.SUB, "0-"],
			["100.5", MathOperator.SUB, "100.5-"],
			["15+24*23-34/231", MathOperator.ADD, "15+24*23-34/231+"],
			["10*30/15+25*", MathOperator.DIVIDE, "10*30/15+25/"]
		];

		it.each(cases)(`"%s" and %s => "%s"`, (input, operator, expected) => {
			expect(service.tryInsertOrReplaceOperator(input, operator)).toBe(expected);
		});
	});

	describe("Метод tryInsertSeparator", () => {
		it.each([
			["234.", ".", "234."],
			["234", ".", "234."],
			["523-", ".", "523-"],
			["53.23", ".", "53.23"],
			["352.23+14.345*24.146", ".", "352.23+14.345*24.146"]
		])(`"%s" and "%s" => "%s"`, (input, sep, expected) => {
			expect(service.tryInsertSeparator(input, sep)).toBe(expected);
		});
	});

	describe("Метод deleteLastChar", () => {
		it.each([
			["123", "12"],
			["a", ""],
			["", ""]
		])(`"%s" => "%s"`, (input, expected) => {
			expect(service.deleteLastChar(input)).toBe(expected);
		});
	});

	describe("Метод evaluate", () => {
		describe("Должен корректно считать математические выражения для целых чисел", () => {
			const cases: [string, number][] = [
				["2+2", 4],
				["2*2", 4],
				["150/2*35-2000+2120/2", 1685],
				["1222333444/2*2+2-2", 1222333444]
			];

			it.each(cases)("%s => %d", (input, expected) => {
				expect(service.evaluate(input)).toBe(expected);
			});
		});

		describe("Должен корректно считать математические выражение для цифр с точкой", () => {
			const cases: [string, number][] = [
				// ["0.35/0.12", 2.91], - will return 2.9166666666667
				["", NaN],
				["0.2+0.1", 0.3],
				["0.3-0.2", 0.1],
				["0.3+0.25+0.3-1.25+99.9-0.31*0.5", 99.345]
			];

			it.each(cases)("%s => %d", (input, expected) => {
				expect(service.evaluate(input)).toBe(expected);
			});
		});
	});
});
