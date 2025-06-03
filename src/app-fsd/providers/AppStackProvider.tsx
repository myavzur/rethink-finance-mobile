import { Stack } from "expo-router";
import React, { type FC } from "react";

const STACK_OPTIONS = {
	headerShown: false
};

export const AppStackProvider: FC = () => {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={STACK_OPTIONS}
			/>

			<Stack.Screen
				name="admin"
				options={STACK_OPTIONS}
			/>

			<Stack.Screen name="+not-found" />
		</Stack>
	);
};
