import { type ILocale} from "@/shared/stores";
import type { Transaction } from "@/shared/database/schema";

export interface AmountProps {
	locale: ILocale;
	amount_value: Transaction["amount_value"];
	amount_currency: Transaction["amount_currency"];
	type?: Transaction["type"];
}
