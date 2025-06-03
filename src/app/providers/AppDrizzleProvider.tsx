import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { SQLiteProvider } from "expo-sqlite";
import React, { type FC, type PropsWithChildren, Suspense } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { databaseRepository } from "@/shared/database/repositories/database.repository";

import migrations from "../../../drizzle/migrations";

export const AppDrizzleProvider: FC<PropsWithChildren> = ({ children }) => {
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
				{children}
			</SQLiteProvider>
		</Suspense>
	);
};
