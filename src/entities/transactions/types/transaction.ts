import { Amount } from "@/src/entities/amount/types";
import { ValueOf } from "@/src/shared/types/value-of";
import { Category } from "./category";

export const TransactionType = {
	INCOME: 1,
	EXPENSE: 0,
} as const;

export type ITransactionType = ValueOf<typeof TransactionType>;

export interface Transaction {
	id: string;
	name: string;
	description?: string;
	type: ITransactionType,
	amount: Amount;
	category: Category;
	created_at: string;
}
