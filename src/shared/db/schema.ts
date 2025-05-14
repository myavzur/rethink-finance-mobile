import type { ICurrency } from '@/entities/amounts/types';
import type { ITransactionType } from '@/entities/transactions/ui';
import * as t from 'drizzle-orm/sqlite-core';
import { sqliteTable } from 'drizzle-orm/sqlite-core';

export const categories = sqliteTable('categories', {
	id: t.integer().primaryKey({ autoIncrement: true }),
	name: t.text().unique("category_name").notNull(),
	icon_name: t.text().notNull(),
	highlight_color: t.text().notNull(),
});

export const transactions = sqliteTable('transactions', {
	id: t.integer().primaryKey({ autoIncrement: true }),
	created_at: t.integer({ mode: "timestamp_ms" }).notNull(),
	name: t.text().notNull(),
	description: t.text(),
	type: t.text().notNull().$type<ITransactionType>(),

	amount_value: t.integer().notNull(),
	amount_currency: t.text().notNull().$type<ICurrency>(),

	category_id: t.integer().references(() => categories.id),
})

export type Category = typeof categories.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;