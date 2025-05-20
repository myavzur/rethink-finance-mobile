import type { Transaction } from "@/shared/database/schema";

export interface CreateTransactionBottomSheetProps {
	type: Transaction["type"];
}
