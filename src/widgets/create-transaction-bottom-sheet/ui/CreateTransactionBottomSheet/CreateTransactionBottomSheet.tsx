import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { Text } from "react-native";

import { SelectHighlightColor } from "@/features/select-hightlight-color/ui";
import { SelectIcon } from "@/features/select-icon/ui/SelectIcon";

import { PortalHostName } from "@/shared/const";
import { StyledBottomSheetModal } from "@/shared/ui";

import type { CreateTransactionBottomSheetProps } from "./CreateTransactionBottomSheet.props.";

export const CreateTransactionBottomSheet = forwardRef<
	BottomSheetModal,
	CreateTransactionBottomSheetProps
>((props, ref) => {
	const { type } = props;

	return (
		<StyledBottomSheetModal
			ref={ref}
			snapPoint="75%"
			portalHostName={PortalHostName.CREATE_NEW_TRANSACTION_BOTTOM_SHEET}
		>
			<Text>Создать !{type}</Text>

			<SelectHighlightColor onSelect={console.log} />

			<SelectIcon onSelect={console.log} />
		</StyledBottomSheetModal>
	);
});

CreateTransactionBottomSheet.displayName = "CreateTransactionBottomSheet";
