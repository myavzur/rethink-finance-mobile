export const TransactionType = {
	INCOME: 1,
	EXPENSE: 0,
} as const;

export const transactionTypeValues = Object.values(TransactionType);