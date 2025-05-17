import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

import { type DrizzleSQLiteDatabase, schema } from "../schema";

class DatabaseRepository {
	readonly DATABASE_NAME = "rethink.finances-3.1.4";

	readonly expoDb: SQLiteDatabase;
	readonly db: DrizzleSQLiteDatabase;

	constructor() {
		this.expoDb = openDatabaseSync(this.DATABASE_NAME, {
			enableChangeListener: true
		});

		this.db = drizzle(this.expoDb, {
			schema: schema
		});
	}
}

export const databaseRepository = new DatabaseRepository();
