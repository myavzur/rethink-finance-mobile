import type { FC } from "react";
import { Pressable, Text, View } from "react-native";

import { getTransactionSymbol } from "../../lib/utils";
import { Amount } from "../Amount";
import type { TransactionCardProps } from "./TransactionCard.props";
import { useStyles } from "./TransactionCard.styles";

export const TransactionCard: FC<TransactionCardProps> = ({
	transaction,
	onPress
}) => {
	// const styles = useStyles(transaction?.category?.highlight_color);
	const styles = useStyles("ELECTRIC_GREEN");

	console.log(transaction);
	console.log("\n");


	const handlePress = () => {
		onPress?.();
	};

	return (
		<Pressable
			onPress={handlePress}
			style={({ pressed }) => {
				return [styles.card, pressed && styles.card_active];
			}}
		>
			{/* <CategoryIcon
				iconName={transaction.category.icon_name}
				highlightColor={transaction.category.highlight_color}
			/> */}

			<View style={styles.transaction}>
				<View style={styles.header}>
					{/* <Text style={styles.header__title}>{transaction.category.name}</Text> */}

					<Text style={styles.header__amount}>
						{getTransactionSymbol(transaction.type)}

						<Amount
							amount_value={transaction.amount_value}
							amount_currency={transaction.amount_currency}
							type={transaction.type}
							locale="ru-RU"
						/>
					</Text>
				</View>

				<Text style={styles.footer}>{transaction.name}</Text>
			</View>
		</Pressable>
	);
};
