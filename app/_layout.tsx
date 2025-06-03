import React from "react";

import {
	AppBottomSheetProvider,
	AppDrizzleProvider,
	AppI18nProvider,
	AppPortalsProvider
} from "@/app/providers";
import { AppStackProvider } from "@/app/providers/AppStackProvider";

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
