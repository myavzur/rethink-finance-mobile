import type { Transaction } from "@/shared/database/schemas";

export interface AmountProps {
	locale: string;
	amount_value: Transaction["amount_value"];
	amount_currency: Transaction["amount_currency"];
	type?: Transaction["type"];
}
