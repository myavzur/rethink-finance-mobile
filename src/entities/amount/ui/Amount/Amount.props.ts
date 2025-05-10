import { ValueOf } from "../../../../shared/types/value-of";

/** ISO 4217 */
export const Currency = {
	RUB: "RUB",
	USD: "USD",
	EUR: "EUR"
} as const;

export type ICurrency = ValueOf<typeof Currency>;

export const currencyOptions = [
	{ value: Currency.RUB, label: "Рубль" },
	{ value: Currency.USD, label: "Доллар" },
	{ value: Currency.EUR, label: "Евро" }
];

export interface Amount {
	amount: number;
	currency: ICurrency;
}

export interface AmountProps {
	locale: string;
	amount: Amount;
}