import { currencyKeys } from "@/entities/amounts/const";
import { transactionTypeValues } from "@/entities/transactions/const";
import * as SQLite from "expo-sqlite";

class Database {
  db: SQLite.SQLiteDatabase | null = null;

  private openDatabase = async () => {
    return await SQLite.openDatabaseAsync(
      process.env.EXPO_PUBLIC_DATABASE_NAME!
    );
  };

  private createTransactionsTable = async (db: SQLite.SQLiteDatabase) => {
		const transactionTypeEnum = transactionTypeValues.join(", ");
		const amountCurrencyEnum = currencyKeys.join(", ");

		const query = `
			CREATE TABLE IF NOT EXISTS transactions (
				id TEXT PRIMARY KEY,
				created_at TEXT NOT NULL,
				name VARCHAR NOT NULL,
				description TEXT,
				type INTEGER NOT NULL CHECK (type IN (${transactionTypeEnum})),

				amount_value DECIMAL NOT NULL,
				amount_currency TEXT NOT NULL CHECK (amount_currency IN (${amountCurrencyEnum})),

				categoryId INTEGER,
				FOREIGN KEY (categoryId) REFERENCES categories(id)
			);
		`;

    await db.execAsync(query);
  };

  private createCategoriesTable = async (db: SQLite.SQLiteDatabase) => {
		const query = `
			CREATE TABLE IF NOT EXISTS categories (
				id INTEGER PRIMARY KEY,
				name UNIQUE VARCHAR NOT NULL,
				icon_name VARCHAR NOT NULL,
				highlight_color VARCHAR NOT NULL
			);
		`;

    await db.execAsync(query);
  };

  public init = async () => {
		if (this.db) {
			throw new Error("Database already initialized");
		}

		this.db = await this.openDatabase();


		try {
			await this.createTransactionsTable(this.db);
			await this.createCategoriesTable(this.db);

			await this.db.runAsync(`
				INSERT INTO categories (name, icon_name, highlight_color)
				VALUES
					("Еда", "activity", "AMETHYST"),
					("Транспорт", "car", "EMERALD_GREEN"),
					("Развлечения", "game-controller", "AQUA_BLUE"),
					("Другое", "question", "COBALT_BLUE");
			`);

			const allRows: any[] = await this.db.getAllAsync('SELECT * FROM categories');
			for (const row of allRows) {
				console.log(row);
			}
		} catch (error) {
			throw new Error(String(error));
		}
  };
}

export const db = new Database();
