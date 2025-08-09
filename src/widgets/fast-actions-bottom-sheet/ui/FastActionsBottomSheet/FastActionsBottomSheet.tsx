import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { forwardRef, useCallback } from "react";
import { Image, View } from "react-native";

import { PortalHostName, UI_ICONS } from "@/shared/const";
import { type ITransactionType, TransactionType } from "@/shared/database/schema";
import { StyledBottomSheetModal } from "@/shared/ui";

import { FastAction } from "../FastAction/FastAction";
import { styles } from "./FastActionsBottomSheet.styles";
import { useIntl } from "@/shared/lib/hooks";

export const FastActionsBottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
	const intl = useIntl();
	const router = useRouter();

	const closeBottomSheet = useCallback(() => {
		if (typeof ref === "function" || !ref?.current) return;
		ref.current.close();
	}, []);

	const handleCreateByScreenshot = useCallback((type: ITransactionType) => {
		closeBottomSheet();
		router.push("/transaction/screenshot")
	}, []);

	const handleCreateByVoice = useCallback(() => {
		closeBottomSheet();
		router.push("/transaction/voice")
	}, []);

	const handleCreateExpense = useCallback(() => {
		closeBottomSheet();
		router.push(`/transaction/type/${TransactionType.EXPENSE}`);
	}, []);

	const handleCreateIncome = useCallback(() => {
		closeBottomSheet();
		router.push(`/transaction/type/${TransactionType.INCOME}`);
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
						icon={UI_ICONS.transaction_income}
						label={intl.formatMessage({ id: "add_income" })}
						onPress={handleCreateIncome}
					/>

					<FastAction
						highlightColor="SUNSET_ORANGE"
						icon={UI_ICONS.transaction_expense}
						label={intl.formatMessage({ id: "add_expense" })}
						onPress={handleCreateExpense}
					/>

					<FastAction
						highlightColor="ASH_GRAY"
						icon={UI_ICONS.transactions_by_voice}
						label={intl.formatMessage({ id: "add_transactions_by_voice" })}
						onPress={handleCreateByVoice}
					/>

					<FastAction
						highlightColor="ASH_GRAY"
						icon={UI_ICONS.transactions_by_screenshot}
						label={intl.formatMessage({ id: "add_transactions_by_screenshot" })}
						onPress={handleCreateByVoice}
					/>

					<View style={styles.placeholder}>
						<Image
							style={styles.sticker}
							source={require("./cat-sticker.png")}
						/>
					</View>
				</View>
			</StyledBottomSheetModal>
		</>
	);
});

FastActionsBottomSheet.displayName = "FastActionsBottomSheet";
