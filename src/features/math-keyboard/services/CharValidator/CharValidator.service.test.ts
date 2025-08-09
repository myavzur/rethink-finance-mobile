import { MathOperator } from "../../lib/utils";
import { CharValidatorService } from "./CharValidator.service";

describe("Сервис CharValidator", () => {
	let service: CharValidatorService = new CharValidatorService();

	describe("Метод isOperator", () => {
		describe("Должен вернуть true для допустимых операторов", () => {
			const cases = [
				MathOperator.ADD,
				MathOperator.SUB,
				MathOperator.MULTIPLY,
				MathOperator.DIVIDE,
				MathOperator.PERCENT
			];

			it.each(cases)("%s => true", (operator) => {
				expect(service.isOperator(operator)).toBe(true);
			});
		});

		describe("Должен вернуть false для недопустимых символов", () => {
			const cases = ["x", " ", "1"];

			it.each(cases)("%s => false", (operator) => {
				expect(service.isOperator(operator)).toBe(false);
			});
		});
	});

	describe("Метод isDigit", () => {
		describe("Должен вернуть true для цифр", () => {
			const cases = ["0", "5", "9"];

			it.each(cases)("%s => true", (digit) => {
				expect(service.isDigit(digit)).toBe(true);
			});
		});

		describe("Должен вернуть false для нецифровых значений", () => {
			const cases = ["a", "+", " ", ""];

			it.each(cases)("%s => false", (digit) => {
				expect(service.isDigit(digit)).toBe(false);
			})
		});
	});

	describe("Метод isDecimalSeparator", () => {
		describe("Должен корректно определять разделитель десятичной точки", () => {
			const cases: [string, boolean][] = [
				[".", true],
				[",", true],
				[";", false],
				["a", false],
				["", false],
				["1", false],
				["-", false]
			];

			it.each(cases)('"%s" => %s', (char, expected) => {
				expect(service.isDecimalSeparator(char)).toBe(expected);
			});
		});
	});

	describe("Метод getLastChar", () => {
		it("Должен вернуть последний символ строки", () => {
			expect(service.getLastChar("123")).toBe("3");
			expect(service.getLastChar("abc")).toBe("c");
		});

		it("Должен вернуть пустую строку для пустого ввода", () => {
			expect(service.getLastChar("")).toBe("");
		});

		it("Должен корректно работать с одним символом", () => {
			expect(service.getLastChar("x")).toBe("x");
		});
	});
});
