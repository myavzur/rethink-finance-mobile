import { CategoryCardList } from "@/features/transactions/ui/CategoryCardList/CategoryCardList";
import { Gaps } from "@/shared/const";
import { MainLayout } from "@/shared/ui";
import { StyleSheet, View } from "react-native";

export default function Tab() {
  return (
    <MainLayout>
      <View style={styles.categories}>
        <CategoryCardList onSelect={console.log} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categories: {
		gap: Gaps.g30
	},
});
