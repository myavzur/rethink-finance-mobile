import { type FC, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { TransactionGroup } from "@/entities/transactions/ui";

import { type Transaction } from "@/shared/database/schemas";

const startDate = new Date("2024-04-15").getTime();
const endDate = new Date("2024-05-20").getTime();

export const TransactionList: FC = () => {
	const [transactionGroup, setTransactionGroup] = useState<
		{ title: string; transactions: Transaction[] }[]
	>([]);

	useEffect(() => {
		// TODO: Query groups from database
		const fe = async () => {
			try {
				console.log("GET TRANSACTION GROUPS");
			} catch (e) {
				console.log(e);
			}
		};

		fe().then(console.log);
	}, []);

	if (!transactionGroup.length) return;

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ gap: 15 }}
			data={transactionGroup}
			keyExtractor={(transactionGroup) => transactionGroup.title}
			renderItem={(transactionGroup) => (
				<TransactionGroup
					title={transactionGroup.item.title}
					transactions={transactionGroup.item.transactions}
				/>
			)}
		/>
	);
};
