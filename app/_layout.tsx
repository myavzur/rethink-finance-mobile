import { db } from "@/shared/database";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { useEffect } from "react";

const DEFAULT_OPTIONS = {
  headerShown: false,
};

export default function RootLayout() {
  useEffect(() => {
    db.init().then((message) => {
      console.log(message);
    });
  }, []);

  return (
    <SQLiteProvider databaseName={process.env.EXPO_PUBLIC_DATABASE_NAME!}>
      <Stack>
        <Stack.Screen name="(tabs)" options={DEFAULT_OPTIONS} />
        <Stack.Screen name="transaction" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SQLiteProvider>
  );
}
