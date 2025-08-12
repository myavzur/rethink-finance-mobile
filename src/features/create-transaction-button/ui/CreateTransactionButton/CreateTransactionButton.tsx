import type { BottomSheetModal } from "@gorhom/bottom-sheet";
import { type FC, useCallback, useRef } from "react";
import { Pressable } from "react-native";

import { FastActionsBottomSheet } from "@/widgets/fast-actions-bottom-sheet/ui";

import { useTheme } from "@/entities/themes/lib/hooks";

import { UI_ICONS } from "@/shared/const";
import { Icon } from "@/shared/ui";

import { useStyles } from "./CreateTransactionButton.styles";

export const CreateTransactionButton: FC = () => {
	const theme = useTheme();
	const styles = useStyles();

	const bottomSheetRef = useRef<BottomSheetModal>(null);

	const handlePresentFastActions = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);

	return (
		<>
			<Pressable
				onPress={handlePresentFastActions}
				style={({ pressed }) => [styles.button, pressed && styles.button_active]}
			>
				<Icon
					size={28}
					name={UI_ICONS.tabbar_big_circle_button}
					color={theme.colors.background}
				/>
			</Pressable>

			<FastActionsBottomSheet ref={bottomSheetRef} />
		</>
	);
};
