import type { Transaction } from "@/shared/database/schemas";

export interface TransactionGroupProps {
	title: string;
	subtitle: string;
	transactions: Transaction[];
}
