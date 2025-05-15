import { ExpoSQLiteDatabase, drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

import { categories, transactions } from "../schemas";

class DatabaseRepository {
	readonly DATABASE_NAME = "rethink.finances-1.0.0";

	readonly expoDb: SQLiteDatabase;

	readonly db: ExpoSQLiteDatabase<{
		categories: typeof categories;
		transactions: typeof transactions;
	}>;

	constructor() {
		this.expoDb = openDatabaseSync(this.DATABASE_NAME);

		this.db = drizzle(this.expoDb, {
			schema: {
				categories,
				transactions
			}
		});
	}
}

export const databaseRepository = new DatabaseRepository();
