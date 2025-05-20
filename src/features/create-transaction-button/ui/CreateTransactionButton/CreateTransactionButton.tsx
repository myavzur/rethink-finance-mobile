import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { type FC, useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";

import { FastActionsBottomSheet } from "@/widgets/fast-actions-bottom-sheet/ui";

import { useTheme } from "@/entities/themes/lib/hooks";

import { Icon } from "@/shared/ui";

import { useStyles } from "./CreateTransactionButton.styles";

export const CreateTransactionButton: FC = () => {
	const theme = useTheme();
	const styles = useStyles();

	const bottomSheetRef = useRef<BottomSheetModal>(null);

	const handlePresetFastActions = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	return (
		<>
			<TouchableOpacity
				style={styles.button}
				onPress={handlePresetFastActions}
			>
				<Icon
					size={28}
					name="plus"
					color={theme.colors.white[1000]}
				/>
			</TouchableOpacity>

			<FastActionsBottomSheet ref={bottomSheetRef} />
		</>
	);
};
