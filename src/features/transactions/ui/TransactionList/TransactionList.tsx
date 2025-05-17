import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC, useMemo } from "react";
import { FlatList } from "react-native";

import { formatCreatedAt } from "@/entities/transactions/lib/utils";
import { TransactionGroup } from "@/entities/transactions/ui";

import { transactionRepository } from "@/shared/database/repositories";
import type { Transaction } from "@/shared/database/schemas";

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
				transactions: Transaction[];
			};
		} = {};

		for (const transaction of transactions) {
			const date = formatCreatedAt(transaction.created_at);

			const group = groups[date];

			if (group) {
				group.amount += transaction.amount_value;
				group.transactions.push(transaction);
			} else {
				groups[date] = {
					amount: transaction.amount_value,
					transactions: [transaction]
				};
			}
		}

		return Object.entries(groups);
	}, [transactions]);

	console.log(transactionGroups);


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
					title={group.item[0]}
					subtitle={group.item[1].amount.toString()}
					transactions={group.item[1].transactions}
				/>
			)}
		/>
	);
};
