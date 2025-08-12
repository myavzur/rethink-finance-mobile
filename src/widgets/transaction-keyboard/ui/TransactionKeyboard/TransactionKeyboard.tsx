import { type FC, useState } from "react";
import { View } from "react-native";

import { CalcKeyboard } from "@/features/calc-keyboard/ui";

import { TextField } from "@/shared/ui";

import type { TransactionKeyboardProps } from "./TransactionKeyboard.props";
import { styles } from "./TransactionKeyboard.styles";
import { useIntl } from "@/shared/lib/hooks";

export const TransactionKeyboard: FC<TransactionKeyboardProps> = ({ onDone }) => {
	const intl = useIntl();
	const [expression, setExpression] = useState("");

	return (
		<View style={styles.group}>
			<TextField
				label={intl.formatMessage({ id: "amount" })}
				value={expression}
				showSoftInputOnFocus={false}
				editable={false}
			/>

			<CalcKeyboard onExpressionChange={setExpression} onDone={onDone} />
		</View>
	);
};
