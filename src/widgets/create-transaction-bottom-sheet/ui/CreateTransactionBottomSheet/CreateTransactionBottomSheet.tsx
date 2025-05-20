import { type BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { PortalHostName } from "@/shared/const";
import { TransactionType } from "@/shared/database/schema";
import { Icon, StyledBottomSheetModal } from "@/shared/ui";

import type { CreateTransactionBottomSheetProps } from "./CreateTransactionBottomSheet.props.";
import { useStyles } from "./CreateTransactionBottomSheet.styles";

export const CreateTransactionBottomSheet = forwardRef<
	BottomSheetModal,
	CreateTransactionBottomSheetProps
>((props, ref) => {
	const { type } = props;
	const { dismiss } = useBottomSheetModal();

	const styles = useStyles();

	const typeMessage = type === TransactionType.INCOME ? "доходы" : "расходы";

	return (
		<StyledBottomSheetModal
			ref={ref}
			snapPoint="75%"
			portalHostName={PortalHostName.CREATE_NEW_TRANSACTION_BOTTOM_SHEET}
		>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.back}
					onPress={() => dismiss()}
				>
					<Icon
						name="arrow-left"
						size={25}
					/>
				</TouchableOpacity>

				<Text style={styles.title}>Новые {typeMessage}</Text>
			</View>

			<View style={styles.section}>
				<Text>Последние категории</Text>
				<Text>Список всех категорий</Text>
			</View>
		</StyledBottomSheetModal>
	);
});

CreateTransactionBottomSheet.displayName = "CreateTransactionBottomSheet";
