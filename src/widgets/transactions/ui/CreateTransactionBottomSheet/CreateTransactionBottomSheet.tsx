import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { forwardRef } from "react";
import { Text } from "react-native";

import { StyledBottomSheetModal } from "@/shared/ui";

import type { CreateTransactionBottomSheetProps } from "./CreateTransactionBottomSheet.props";

export const CreateTransactionBottomSheet = forwardRef<
	BottomSheetModal,
	CreateTransactionBottomSheetProps
>((props, ref) => {
	const { type, portalHostName } = props;

	console.log(ref);

	return (
		<Portal hostName={portalHostName}>
			<StyledBottomSheetModal ref={ref}>
				<Text>{type}</Text>
			</StyledBottomSheetModal>
		</Portal>
	);
});

CreateTransactionBottomSheet.displayName = "CreateTransactionBottomSheet";
