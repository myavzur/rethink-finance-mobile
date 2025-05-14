import { TransactionType, type ITransactionType } from "@/shared/database/schemas/transactions.schema";

export const getTransactionSymbol = (type: ITransactionType) => {
	if (type === TransactionType.INCOME) {
		return "+";
	}
	return "-";
}