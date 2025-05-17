import type { ITransactionType } from "@/shared/database/schema";

export interface CreateTransactionBottomSheetProps {
	type: ITransactionType;
	portalHostName?: string;
}
