import { useRouter } from "expo-router";
import { type FC } from "react";
import { Text, View } from "react-native";


import type { Transaction } from "@/shared/database/schemas";
import { TransactionCard } from "../TransactionCard";
import type { TransactionGroupProps } from "./TransactionGroup.props";
import { useStyles } from "./TransactionGroup.styles";

export const TransactionGroup: FC<TransactionGroupProps> = ({ date, subtitleElement, transactions }) => {
	const router = useRouter();
	const styles = useStyles();

	const handleTransactionPress = (transaction: Transaction) => {
		router.push({
			pathname: "/transactions/[id]",
			params: {
				id: transaction.id
			}
		})
	};

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.date}>{date}</Text>

				<Text style={styles.amount}>
					{subtitleElement}
				</Text>
			</View>

			<View style={styles.list}>
				{transactions.map((transaction) => (
					<TransactionCard
						key={transaction.id}
						transaction={transaction}
						onPress={handleTransactionPress}
					/>
				))}
			</View>
		</View>
	);
};
