import type { Category } from "./categories.entity.types";
import type { transactions } from "./transactions.entity";

export type Transaction = typeof transactions.$inferSelect;

export interface TransactionWithCategory extends Transaction {
	category: Category;
}
