import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";

import { TransactionCard } from "@/entities/transactions/ui";

import { PortalHostName } from "@/shared/const";
import { StyledBottomSheetModal } from "@/shared/ui";

import type { TransactionBottomSheetProps } from "./TransactionBottomSheet.props";

export const TransactionBottomSheet = forwardRef<
	BottomSheetModal,
	TransactionBottomSheetProps
>((props, ref) => {
	const { transaction } = props;

	return (
		<StyledBottomSheetModal
			ref={ref}
			snapPoint="75%"
			portalHostName={PortalHostName.CREATE_NEW_TRANSACTION_BOTTOM_SHEET}
		>
			<TransactionCard transaction={transaction} />
		</StyledBottomSheetModal>
	);
});

TransactionBottomSheet.displayName = "TransactionBottomSheet";
