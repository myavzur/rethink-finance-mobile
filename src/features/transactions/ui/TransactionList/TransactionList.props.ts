import type { TransactionWithCategory } from "@/shared/database/schema";

export interface TransactionListProps {
	onTransactionPress: (transaction: TransactionWithCategory) => void;
}
