import { ExpoSQLiteDatabase, drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

import { categories, categoriesRelations, transactions, transactionsRelations } from "../schemas";

class DatabaseRepository {
	readonly DATABASE_NAME = "rethink.finances-3.1.0";

	readonly expoDb: SQLiteDatabase;

	readonly db: ExpoSQLiteDatabase<{
		categories: typeof categories;
		transactions: typeof transactions;
		categoriesRelations: typeof categoriesRelations;
		transactionsRelations: typeof transactionsRelations;
	}>;

	constructor() {
		this.expoDb = openDatabaseSync(this.DATABASE_NAME, {
			enableChangeListener: true
		});

		this.db = drizzle(this.expoDb, {
			schema: {
				categories,
				categoriesRelations,
				transactions,
				transactionsRelations,
			}
		});
	}
}

export const databaseRepository = new DatabaseRepository();
