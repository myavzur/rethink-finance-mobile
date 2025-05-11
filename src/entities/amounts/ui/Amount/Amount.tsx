import { FC } from "react";

import { Text } from "react-native";

import { AmountProps } from "./Amount.props";
import styles from "./Amount.styles";

export const Amount: FC<AmountProps> = ({ amount, locale }) => {
	const value = amount.amount.toLocaleString(locale, {
		style: "currency",
		currency: amount.currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	return <Text style={styles.amount}>{value}</Text>;
};
