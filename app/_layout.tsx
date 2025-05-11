import { Stack } from "expo-router";

const DEFAULT_OPTIONS = {
  headerShown: false
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={DEFAULT_OPTIONS} />
      <Stack.Screen name="transaction" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
