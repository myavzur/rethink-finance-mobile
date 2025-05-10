import { Transaction } from "@/src/entities/transactions/types";
import { ValueOf } from "@/src/shared/types/value-of";

export const TransactionType = {
	EXPENSE: 0,
	INCOME: 1,
} as const;

export type ITransactionType = ValueOf<typeof TransactionType>;

export interface TransactionCardProps {
	transaction: Transaction;
	onClick: (transaction: Transaction) => void;
}