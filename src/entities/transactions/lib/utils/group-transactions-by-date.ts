import type { Transaction, TransactionWithCategory } from "@/shared/database/schema";
import { Locale, type ILocale } from "@/shared/stores";

import { TransactionType } from "../../ui";
import { formatCreatedAt } from "./format-created-at";
import type { IntlShape } from "react-intl";

interface TransactionGroup {
	amount: Transaction["amount_value"];
	type: Transaction["type"];
	transactions: TransactionWithCategory[];
}

type TransactionGroupMap = {
	[date: string]: TransactionGroup;
};

type TransactionGroupMapEntries = [date: string, TransactionGroup][];

export const groupTransactionsByDate = (
	transactions: TransactionWithCategory[],
	intl: IntlShape
): TransactionGroupMapEntries => {
	const groups: TransactionGroupMap = {};

	// TODO: Refactor
	for (const transaction of transactions) {
		const { type, created_at, amount_value } = transaction;

		const amountModifier = type === TransactionType.EXPENSE ? -1 : 1;
		const date = formatCreatedAt(created_at, intl);

		const group = groups[date];

		if (group) {
			group.amount += amount_value * amountModifier;

			// Если сумма транзакции больше нуля, то это приход, иначе расход
			const groupType =
				group.amount > 0 ? TransactionType.INCOME : TransactionType.EXPENSE;
			group.type = groupType;

			group.transactions.push(transaction);
		} else {
			const amount = amount_value * amountModifier;
			const groupType =
				amount > 0 ? TransactionType.INCOME : TransactionType.EXPENSE;

			groups[date] = {
				amount: amount,
				type: groupType,
				transactions: [transaction]
			};
		}
	}

	return Object.entries(groups);
};
