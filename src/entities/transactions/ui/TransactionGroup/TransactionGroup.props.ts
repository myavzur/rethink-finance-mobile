import type { ReactNode } from "react";

import type { TransactionWithCategory } from "@/shared/database/schema";

export interface TransactionGroupProps {
	date: string;
	subtitleElement: ReactNode;
	transactions: TransactionWithCategory[];
	onTransactionPress: (transaction: TransactionWithCategory) => void;
}
