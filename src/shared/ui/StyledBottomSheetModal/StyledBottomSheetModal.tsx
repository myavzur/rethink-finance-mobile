import {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetView
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback } from "react";

import type { StyledBottomSheetModalProps } from "./StyledBottomSheetModal.props";
import { styles } from "./StyledBottomSheetModal.styles";

const snapPoints = ["75%", "100%"];

export const StyledBottomSheetModal = forwardRef<
	BottomSheetModal,
	StyledBottomSheetModalProps
>((props, bottomSheetRef) => {
	const renderBackdrop = useCallback((props: any) => {
		return (
			<BottomSheetBackdrop
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				{...props}
			/>
		);
	}, []);

	return (
		<BottomSheetModal
			ref={bottomSheetRef}
			index={0}
			snapPoints={snapPoints}
			backdropComponent={renderBackdrop}
		>
			<BottomSheetView style={styles.contentContainer}>
				{props.children}
			</BottomSheetView>
		</BottomSheetModal>
	);
});

StyledBottomSheetModal.displayName = "StyledBottomSheetModal";
