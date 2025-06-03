import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import type { FC, PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const AppBottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<GestureHandlerRootView>
			<BottomSheetModalProvider>{children}</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
};
