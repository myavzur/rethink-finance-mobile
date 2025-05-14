import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

import { Suspense } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import migrations from "../drizzle/migrations";

const STACK_OPTIONS = {
  headerShown: false,
};

const DATABASE_NAME = "rethink.finances-1.0.0";

export default function RootLayout() {
  const expoDb = SQLite.openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDb);

  const { success, error } = useMigrations(db, migrations);
  useDrizzleStudio(expoDb);

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
      <SQLite.SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense={true}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={STACK_OPTIONS} />
          <Stack.Screen name="transaction" options={STACK_OPTIONS} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SQLite.SQLiteProvider>
    </Suspense>
  );
}
