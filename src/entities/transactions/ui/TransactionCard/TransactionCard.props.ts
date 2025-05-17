import type { Transaction, TransactionWithCategory } from "@/shared/database/schemas";
import type { ValueOf } from "@/shared/types/util.types";

export const TransactionType = {
	EXPENSE: 0,
	INCOME: 1
} as const;

export type ITransactionType = ValueOf<typeof TransactionType>;

export interface TransactionCardProps {
	transaction: TransactionWithCategory;
	onLongPress?: () => void;
	onPress?: (transaction: Transaction) => void;
}
