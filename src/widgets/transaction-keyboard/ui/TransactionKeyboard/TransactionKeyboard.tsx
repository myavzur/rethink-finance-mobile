import { type FC, useState } from "react";
import { View } from "react-native";

import { MathKeyboard } from "@/features/math-keyboard/ui";

import { TextField } from "@/shared/ui";

import type { TransactionKeyboardProps } from "./TransactionKeyboard.props";
import { styles } from "./TransactionKeyboard.styles";

export const TransactionKeyboard: FC<TransactionKeyboardProps> = ({}) => {
	const [expression, setExpression] = useState("");

	return (
		<View style={styles.group}>
			<TextField
				label={"Сумма"}
				value={expression}
				showSoftInputOnFocus={false}
				editable={false}
			/>

			<MathKeyboard onExpressionChange={setExpression} />
		</View>
	);
};
