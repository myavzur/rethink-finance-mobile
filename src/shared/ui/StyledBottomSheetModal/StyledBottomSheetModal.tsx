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
import { useStyles } from "./StyledBottomSheetModal.styles";

const snapPoints: SnapPoints[] = ["50%", "75%", "100%"];

export const StyledBottomSheetModal = forwardRef<
	BottomSheetModal,
	StyledBottomSheetModalProps
>((props, bottomSheetRef) => {
	const { portalHostName, snapPoint = "50%" } = props;

	const styles = useStyles();

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
				backgroundStyle={styles.sheetBackground}
				handleIndicatorStyle={styles.sheetHandleIndicator}
			>
				<BottomSheetView style={styles.content}>{props.children}</BottomSheetView>
			</BottomSheetModal>
		</Portal>
	);
});

StyledBottomSheetModal.displayName = "StyledBottomSheetModal";
