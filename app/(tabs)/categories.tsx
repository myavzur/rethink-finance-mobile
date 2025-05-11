import { ThemedText } from "@/entities/themes/ui/ThemedText";
import { Gaps } from "@/shared/const";
import { Accordion, MainLayout } from "@/shared/ui";
import { StyleSheet, View } from "react-native";

export default function Tab() {
  return (
    <MainLayout>
      <View style={styles.categories}>
        <Accordion title="Расход">
          <ThemedText>Hello</ThemedText>
        </Accordion>

        <Accordion title="Доход">
          <ThemedText>Hello</ThemedText>
        </Accordion>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categories: {
		gap: Gaps.g30
	},
});
