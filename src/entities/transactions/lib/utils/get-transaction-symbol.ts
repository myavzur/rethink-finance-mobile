import {
	type ITransactionType,
	TransactionType
} from "@/shared/database/schemas/transactions.schema";

export const getTransactionSymbol = (type: ITransactionType) => {
	if (type === TransactionType.INCOME) {
		return "+";
	}
	return "-";
};
