import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { databaseRepository } from "@/shared/database/repositories/database.repository";

import migrations from "../drizzle/migrations";

const STACK_OPTIONS = {
	headerShown: false
};

export default function RootLayout() {
	const { success, error } = useMigrations(databaseRepository.db, migrations);

	if (error) {
		return (
			<View>
				<Text>{error.name}</Text>
				<Text>{String(error.cause)}</Text>
				<Text>{error.message}</Text>
			</View>
		);
	}
	if (!success) return <ActivityIndicator size="large" />;

	return (
		<Suspense fallback={<ActivityIndicator size="large" />}>
			<SQLiteProvider
				databaseName={databaseRepository.DATABASE_NAME}
				options={{ enableChangeListener: true }}
				useSuspense={true}
			>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={STACK_OPTIONS}
					/>

					<Stack.Screen
						name="transaction"
						options={STACK_OPTIONS}
					/>

					<Stack.Screen
						name="admin"
						options={STACK_OPTIONS}
					/>
					<Stack.Screen name="+not-found" />
				</Stack>
			</SQLiteProvider>
		</Suspense>
	);
}
