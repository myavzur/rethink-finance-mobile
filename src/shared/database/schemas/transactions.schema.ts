import { relations, sql } from "drizzle-orm";
import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

import type { ValueOf } from "@/shared/types/util.types";

import { categories } from "./categories.schema";

// TransactionType
export const TransactionType = {
	INCOME: 1,
	EXPENSE: 0
} as const;

export type ITransactionType = ValueOf<typeof TransactionType>;

// Currency
/** ISO 4217 */
export const Currency = {
	RUB: "RUB",
	USD: "USD",
	EUR: "EUR"
} as const;

export type ICurrency = ValueOf<typeof Currency>;

export const currencyOptions = [
	{ value: Currency.RUB, label: "Рубль" } as const,
	{ value: Currency.USD, label: "Доллар" } as const,
	{ value: Currency.EUR, label: "Евро" } as const
];

export const transactions = sqliteTable("transactions", {
	id: t.integer().primaryKey({ autoIncrement: true }),
	created_at: t
		.integer({ mode: "number" })
		.notNull()
		.default(sql`(unixepoch('subsec') * 1000)`),

	name: t.text().notNull(),
	description: t.text(),
	type: t.text().notNull().$type<ITransactionType>(),
	amount_value: t.integer().notNull(),
	amount_currency: t.text().notNull().$type<ICurrency>(),

	category_id: t.integer().references(() => categories.id).notNull()
});

export const transactionsRelations = relations(transactions, ({ one }) => ({
	category: one(categories, {
		fields: [transactions.category_id],
		references: [categories.id]
	})
}))

export type Transaction = typeof transactions.$inferSelect;
