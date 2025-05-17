import type { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";

import { categories, categoriesRelations } from "./categories.entity";
import { transactions, transactionsRelations } from "./transactions.entity";

// Schema
export type Schema = {
	categories: typeof categories;
	categoriesRelations: typeof categoriesRelations;

	transactions: typeof transactions;
	transactionsRelations: typeof transactionsRelations;
};

export const schema: Schema = {
	categories,
	categoriesRelations,
	transactions,
	transactionsRelations
};

export type DrizzleSQLiteDatabase = ExpoSQLiteDatabase<Schema>;
