import type { AmountValue, ICurrency } from "../../types";

export interface AmountProps {
	locale: string;
	value: AmountValue;
	currency: ICurrency;
}