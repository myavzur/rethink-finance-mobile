import type { TransactionWithCategory } from "@/shared/database/schemas";
import type { ReactNode } from "react";

export interface TransactionGroupProps {
	date: string;
	subtitleElement: ReactNode;
	transactions: TransactionWithCategory[];
}
