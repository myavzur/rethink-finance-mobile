import React from "react";

import {
	AppBottomSheetProvider,
	AppDrizzleProvider,
	AppI18nProvider,
	AppPortalsProvider,
	AppStackProvider
} from "@/app-fsd/providers";

const STACK_OPTIONS = {
	headerShown: false
};

export default function RootLayout() {
	return (
		<AppBottomSheetProvider>
			<AppPortalsProvider>
				<AppDrizzleProvider>
					<AppI18nProvider>
						<AppStackProvider />
					</AppI18nProvider>
				</AppDrizzleProvider>
			</AppPortalsProvider>
		</AppBottomSheetProvider>
	);
}
