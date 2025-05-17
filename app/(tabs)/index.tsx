import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import { PortalHost } from "@gorhom/portal";
import React, { useRef, useState } from "react";

import { CreateTransactionBottomSheet } from "@/widgets/transactions/ui/CreateTransactionBottomSheet/CreateTransactionBottomSheet";

import { TransactionList } from "@/features/transactions/ui";

import { PortalHostName } from "@/shared/const";
import type { TransactionWithCategory } from "@/shared/database/schema";
import { MainLayout } from "@/shared/ui";

export default function Tab() {
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const [transaction, setTransaction] = useState<TransactionWithCategory | null>(
		null
	);

	const handleTransactionPress = (transaction: TransactionWithCategory) => {
		setTransaction(transaction);
		bottomSheetRef.current?.present();
	};

	return (
		<>
			<MainLayout>
				<TransactionList onTransactionPress={handleTransactionPress} />

				<PortalHost name={PortalHostName.CREATE_NEW_TRANSACTION_MODAL} />

				<CreateTransactionBottomSheet
					ref={bottomSheetRef}
					portalHostName={PortalHostName.CREATE_NEW_TRANSACTION_MODAL}
					type={0}
				/>
			</MainLayout>
		</>
	);
}
