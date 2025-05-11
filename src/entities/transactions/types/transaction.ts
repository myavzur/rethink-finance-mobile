import type { Amount } from "@/entities/amounts/types";
import type { ValueOf } from "@/shared/types/util.types";
import type { Category } from "./category";

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
