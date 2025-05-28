import { type FC } from "react";

import { TextField } from "@/shared/ui";

import type { AmountFieldProps } from "./AmountField.props";

export const AmountField: FC<AmountFieldProps> = ({ ...textFieldProps }) => {
	return (
		<TextField
			{...textFieldProps}
			label="Сумма"
			keyboardType="numeric"
		/>
	);
};
