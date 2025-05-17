import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

import type { IHighlightColor } from "@/entities/themes/const";

import type { IconName } from "@/shared/ui";
import { relations } from "drizzle-orm";
import { transactions } from "./transactions.schema";

export const categories = sqliteTable("categories", {
	id: t.integer().primaryKey({ autoIncrement: true }),
	name: t.text().unique("category_name").notNull(),
	icon_name: t.text().notNull().$type<IconName>(),
	highlight_color: t.text().notNull().$type<IHighlightColor>()
});

export const categoriesRelations = relations(categories, ({ many }) => ({
	transactions: many(transactions),
}));

export type Category = typeof categories.$inferSelect;
