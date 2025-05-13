/** ISO 4217 */
export const Currency = {
	RUB: "RUB",
	USD: "USD",
	EUR: "EUR"
} as const;

export const currencyKeys = Object.keys(Currency) as (keyof typeof Currency)[];

export const currencyOptions = [
	{ value: Currency.RUB, label: "Рубль" },
	{ value: Currency.USD, label: "Доллар" },
	{ value: Currency.EUR, label: "Евро" }
];
