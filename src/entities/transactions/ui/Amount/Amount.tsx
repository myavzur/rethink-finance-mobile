import { useMemo, type FC } from "react";
import { Text } from "react-native";

import { TransactionType } from "@/shared/database/schemas/transactions.schema";
import type { AmountProps } from "./Amount.props";
import { styles } from "./Amount.styles";

export const Amount: FC<AmountProps> = ({ amount_value, amount_currency, type, locale }) => {
	const localeValue = amount_value.toLocaleString(locale, {
		style: "currency",
		currency: amount_currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	const amountPrefix = useMemo(() => {
		switch(type) {
			case TransactionType.INCOME: {
				return "+";
			}
			case TransactionType.EXPENSE: {
				return "-";
			}
			default: {
				return null;
			}
		}
	}, [type, amount_value]);

	return <Text style={styles.amount}>{amountPrefix}{localeValue}</Text>;
};
