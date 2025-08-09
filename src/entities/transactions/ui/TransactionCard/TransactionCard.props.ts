import type { TransactionWithCategory } from "@/shared/database/schema";
import type { ValueOf } from "@/shared/types/util.types";

export interface TransactionCardProps {
	transaction: TransactionWithCategory;
	onLongPress?: () => void;
	onPress?: (transaction: TransactionWithCategory) => void;
}
