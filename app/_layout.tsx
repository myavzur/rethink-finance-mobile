import React from "react";

import {
	AppBottomSheetProvider,
	AppDrizzleProvider,
	AppI18nProvider,
	AppPortalsProvider,
} from "@/app-fsd/providers";
import { Stack } from "expo-router";

const STACK_OPTIONS = {
	headerShown: false
};

export default function Layout() {
	return (
		<AppBottomSheetProvider>
			<AppPortalsProvider>
				<AppDrizzleProvider>
					<AppI18nProvider>
						<Stack
							screenOptions={{
								headerShown: false
							}}
						/>
					</AppI18nProvider>
				</AppDrizzleProvider>
			</AppPortalsProvider>
		</AppBottomSheetProvider>
	);
}
