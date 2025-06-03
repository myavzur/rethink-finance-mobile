import type { FC, PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export const AppBottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<GestureHandlerRootView>
			<BottomSheetModalProvider>
				{children}
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	)
}