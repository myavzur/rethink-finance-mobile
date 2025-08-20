import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC, useMemo } from "react";
import { FlatList } from "react-native";

import { groupTransactionsByDate } from "@/entities/transactions/lib/utils";
import { TransactionGroup } from "@/entities/transactions/ui";
import { Amount } from "@/entities/transactions/ui/Amount";

import { transactionRepository } from "@/shared/database/repositories";
import { Currency, TransactionType } from "@/shared/database/schema";
import { useIntl } from "@/shared/lib/hooks";
import { usePrefsStore } from "@/shared/stores";

import type { TransactionListProps } from "./TransactionList.props";

const startDate = new Date("2020-01-01").getTime();
const endDate = new Date("2030-01-01").getTime();

export const TransactionList: FC<TransactionListProps> = ({
	onTransactionPress
}) => {
	const preferredLocale = usePrefsStore((state) => state.preferredLocale);
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
			renderItem={(item) => {
				const [date, group] = item.item;

				return (
					<TransactionGroup
						date={date}
						subtitleElement={
							<Amount
								amount_value={Math.abs(group.amount)}
								amount_currency={Currency.RUB}
								type={
									group.amount < 0 ? TransactionType.EXPENSE : TransactionType.INCOME
								}
								locale={preferredLocale}
							/>
						}
						transactions={group.transactions}
						onTransactionPress={onTransactionPress}
					/>
				);
			}}
		/>
	);
};
