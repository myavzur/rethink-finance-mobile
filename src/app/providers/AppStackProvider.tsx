import React, { type FC, type PropsWithChildren } from "react";
import { Stack } from "expo-router";

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
	)
}