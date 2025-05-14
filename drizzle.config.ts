import type { Config } from 'drizzle-kit';

export default {
  schema: [
    "./src/shared/database/schemas/categories.schema.ts",
    "./src/shared/database/schemas/transactions.schema.ts"
  ],
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo',
} satisfies Config;