import { TransactionType } from "../../const";
import type { ITransactionType } from "../../types";

export const getTransactionSymbol = (type: ITransactionType) => {
	if (type === TransactionType.INCOME) {
		return "+";
	}

	return "-";
}