import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useRef, useState } from "react";
import { Image, View } from "react-native";

import { CreateTransactionBottomSheet } from "@/widgets/create-transaction-bottom-sheet/ui";

import { PortalHostName } from "@/shared/const";
import { type ITransactionType, TransactionType } from "@/shared/database/schema";
import { StyledBottomSheetModal } from "@/shared/ui";

import { FastAction } from "../FastAction/FastAction";
import { styles } from "./FastActionsBottomSheet.styles";

export const FastActionsBottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const [transactionType, setTransactionType] = useState<ITransactionType>(0);

	const handleCreateExpense = useCallback(() => {
		setTransactionType(TransactionType.EXPENSE);
		bottomSheetRef.current?.present();
	}, []);

	const handleCreateIncome = useCallback(() => {
		setTransactionType(TransactionType.INCOME);
		bottomSheetRef.current?.present();
	}, []);

	return (
		<>
			<StyledBottomSheetModal
				ref={ref}
				snapPoint="50%"
				portalHostName={PortalHostName.FAST_ACTIONS_BOTTOM_SHEET}
			>
				<View style={styles.list}>
					<FastAction
						highlightColor="EMERALD_GREEN"
						icon="sunrise"
						label="Добавить новые доходы"
						onPress={handleCreateIncome}
					/>

					<FastAction
						highlightColor="SUNSET_ORANGE"
						icon="sunset"
						label="Добавить новые расходы"
						onPress={handleCreateExpense}
					/>

					<View style={styles.placeholder}>
						<Image
							style={styles.sticker}
							source={require("./cat-sticker.png")}
						/>
					</View>
				</View>
			</StyledBottomSheetModal>

			<CreateTransactionBottomSheet
				ref={bottomSheetRef}
				type={transactionType}
			/>
		</>
	);
});

FastActionsBottomSheet.displayName = "FastActionsBottomSheet";
