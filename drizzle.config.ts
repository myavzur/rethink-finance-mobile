import type { Config } from "drizzle-kit";

export default {
  schema: [
    "./src/shared/database/schema/categories.entity.ts",
    "./src/shared/database/schema/transactions.entity.ts",
  ],
  out: "./drizzle",
  dialect: "sqlite",
  driver: "expo",
} satisfies Config;