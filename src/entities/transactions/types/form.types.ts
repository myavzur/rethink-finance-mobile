import type { Transaction } from "@/shared/database/schema";

export type CreateTransactionForm = Omit<Transaction, "id">;