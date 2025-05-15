import type { FC } from "react";
import { Text } from "react-native";

import type { AmountProps } from "./Amount.props";
import { styles } from "./Amount.styles";

export const Amount: FC<AmountProps> = ({ value, currency, locale }) => {
	const localeValue = value.toLocaleString(locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	return <Text style={styles.amount}>{localeValue}</Text>;
};
