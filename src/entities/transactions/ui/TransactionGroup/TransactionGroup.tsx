import { useRouter } from "expo-router";
import { type FC } from "react";
import { Text, View } from "react-native";

import { TransactionType } from "@/shared/database/schemas/transactions.schema";

import { Amount } from "../Amount";
import { TransactionCard } from "../TransactionCard";
import type { TransactionGroupProps } from "./TransactionGroup.props";
import { useStyles } from "./TransactionGroup.styles";

export const TransactionGroup: FC<TransactionGroupProps> = ({ title, subtitle, transactions }) => {
	const router = useRouter();
	const styles = useStyles();

	const handlePress = () => {
		router.push("/transaction");
	};

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.date}>{title}</Text>

				<Text style={styles.amount}>
					<Amount
						amount_value={1000}
						amount_currency="RUB"
						type={TransactionType.INCOME}
						locale="ru-RU"
					/>
				</Text>
			</View>

			<View>
				{transactions.map((transaction) => (
					<TransactionCard
						key={transaction.id}
						transaction={transaction}
						onPress={handlePress}
					/>
				))}
			</View>
		</View>
	);
};
