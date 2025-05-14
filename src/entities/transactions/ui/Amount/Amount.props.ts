import type { Transaction } from "@/shared/database/schemas";

export interface AmountProps {
	locale: string;
	value: Transaction["amount_value"];
	currency: Transaction["amount_currency"];
}