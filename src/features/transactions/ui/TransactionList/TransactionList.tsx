import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC, useMemo } from "react";
import { FlatList } from "react-native";

import { formatCreatedAt } from "@/entities/transactions/lib/utils";
import { TransactionGroup } from "@/entities/transactions/ui";
import { Amount } from "@/entities/transactions/ui/Amount";

import { transactionRepository } from "@/shared/database/repositories";
import {
	TransactionType,
	type TransactionWithCategory
} from "@/shared/database/schemas";

const startDate = new Date("2020-01-01").getTime();
const endDate = new Date("2030-01-01").getTime();

export const TransactionList: FC = () => {
	const { data: transactions } = useLiveQuery(
		transactionRepository.getBetweenDates(startDate, endDate)
	);

	const transactionGroups = useMemo(() => {
		const groups: {
			[k: string]: {
				amount: number;
				transactions: TransactionWithCategory[];
			};
		} = {};

		// TODO: Refactor
		for (const transaction of transactions) {
			const { created_at, amount_value, type } = transaction;

			const date = formatCreatedAt(created_at);
			const group = groups[date];

			if (group) {
				if (type === TransactionType.EXPENSE) {
					group.amount -= amount_value;
				} else {
					group.amount += amount_value;
				}

				group.transactions.push(transaction);
			} else {
				groups[date] = {
					amount: amount_value,
					transactions: [transaction]
				};
			}
		}

		return Object.entries(groups);
	}, [transactions]);

	if (!transactionGroups.length) return;

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ gap: 15 }}
			data={transactionGroups}
			keyExtractor={([key]) => key}
			renderItem={(group) => (
				<TransactionGroup
					date={group.item[0]}
					subtitleElement={
						<Amount
							amount_value={Math.abs(group.item[1].amount)}
							amount_currency="RUB"
							type={group.item[1].amount < 0 ? TransactionType.EXPENSE : TransactionType.INCOME}
							locale="ru-RU"
						/>
					}
					transactions={group.item[1].transactions}
				/>
			)}
		/>
	);
};
