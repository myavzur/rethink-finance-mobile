import {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetView
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { forwardRef, useCallback, useMemo } from "react";

import type {
	SnapPoints,
	StyledBottomSheetModalProps
} from "./StyledBottomSheetModal.props";
import { styles } from "./StyledBottomSheetModal.styles";

const snapPoints: SnapPoints[] = ["50%", "75%", "100%"];

export const StyledBottomSheetModal = forwardRef<
	BottomSheetModal,
	StyledBottomSheetModalProps
>((props, bottomSheetRef) => {
	const { portalHostName, snapPoint = "50%" } = props;

	const snapIndex = useMemo(() => {
		return snapPoints.findIndex((point) => point === snapPoint);
	}, [snapPoint]);

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
		<Portal hostName={portalHostName}>
			<BottomSheetModal
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				index={snapIndex}
				backdropComponent={renderBackdrop}
			>
				<BottomSheetView style={styles.contentContainer}>
					{props.children}
				</BottomSheetView>
			</BottomSheetModal>
		</Portal>
	);
});

StyledBottomSheetModal.displayName = "StyledBottomSheetModal";
