import type { categories } from "./categories.entity";

export type Category = typeof categories.$inferSelect;
