import { type BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";

import { TransactionBottomSheet } from "@/widgets/transaction-bottom-sheet/ui";

import { TransactionList } from "@/entities/transactions/ui";

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

				<TransactionBottomSheet
					transaction={transaction!}
					ref={bottomSheetRef}
				/>
			</MainLayout>
		</>
	);
}
