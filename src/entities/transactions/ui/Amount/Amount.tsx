import { type FC, useMemo } from "react";
import { Text } from "react-native";

import type { AmountProps } from "./Amount.props";
import { styles } from "./Amount.styles";
import { TransactionType } from "@/shared/database/schema";

export const Amount: FC<AmountProps> = ({
	amount_value,
	amount_currency,
	type,
	locale
}) => {
	const localeValue = amount_value.toLocaleString(locale, {
		style: "currency",
		currency: amount_currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	const amountPrefix = useMemo(() => {
		if (type === TransactionType.INCOME) {
			return "+";
		}

		if (type === TransactionType.EXPENSE) {
			return "-";
		}

		return null;
	}, [type, amount_value]);

	return (
		<Text style={styles.amount}>
			{amountPrefix}
			{localeValue}
		</Text>
	);
};
