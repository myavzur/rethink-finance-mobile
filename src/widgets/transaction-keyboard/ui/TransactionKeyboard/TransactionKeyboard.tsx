import { type FC, useState } from "react";
import { View } from "react-native";

import { MathKeyboard } from "@/features/math-keyboard/ui";

import { TextField } from "@/shared/ui";

import type { TransactionKeyboardProps } from "./TransactionKeyboard.props";
import type { IMathAction } from "@/features/math-keyboard/lib/utils";

export const TransactionKeyboard: FC<TransactionKeyboardProps> = ({}) => {
	const [expression, setExpression] = useState("");

	const handleKeyboardCommand = (action: IMathAction) => {
		console.log(action);
	};

	return (
		<View>
			<TextField
				label={"Сумма"}
				value={""}
			/>

			<MathKeyboard onAction={handleKeyboardCommand} />
		</View>
	);
};
