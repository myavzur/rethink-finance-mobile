import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC, useMemo } from "react";
import { FlatList } from "react-native";

import { groupTransactionsByDate } from "@/entities/transactions/lib/utils";
import { TransactionGroup } from "@/entities/transactions/ui";
import { Amount } from "@/entities/transactions/ui/Amount";

import { transactionRepository } from "@/shared/database/repositories";
import { TransactionType } from "@/shared/database/schema";

import type { TransactionListProps } from "./TransactionList.props";
import { useIntl } from "react-intl";

const startDate = new Date("2020-01-01").getTime();
const endDate = new Date("2030-01-01").getTime();

export const TransactionList: FC<TransactionListProps> = ({
	onTransactionPress
}) => {
	const intl = useIntl();

	const { data: transactions } = useLiveQuery(
		transactionRepository.getBetweenDates(startDate, endDate)
	);

	const transactionGroups = useMemo(() => {
		return groupTransactionsByDate(transactions, intl);
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
							type={
								group.item[1].amount < 0
									? TransactionType.EXPENSE
									: TransactionType.INCOME
							}
							locale="ru-RU"
						/>
					}
					transactions={group.item[1].transactions}
					onTransactionPress={onTransactionPress}
				/>
			)}
		/>
	);
};
