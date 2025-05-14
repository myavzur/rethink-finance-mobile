import { CategoryList } from "@/features/transactions/ui/CategoryList/CategoryList";
import { Gaps } from "@/shared/const";
import { MainLayout } from "@/shared/ui";
import { StyleSheet, View } from "react-native";

export default function Tab() {
  return (
    <MainLayout>
      <View style={styles.categories}>
        <CategoryList onSelect={console.log} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categories: {
		gap: Gaps.g30
	},
});
