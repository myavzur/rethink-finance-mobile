import { Transaction } from "@/src/entities/transactions/types/transaction";
import { TransactionGroup } from "@/src/entities/transactions/ui";
import { Gaps } from "@/src/shared/const/Gaps";
import { range } from "@/src/shared/lib/utils";
import { useFonts } from "expo-font";
import { FlatList, StyleSheet, View } from "react-native";

const transactions: { transactions: Transaction[]; title: string }[] = [
  {
    title: "Сегодня",
    transactions: range(0, 4).map((value) => ({
      id: `sol-${value}`,
      amount: {
        amount: 150 * value,
        currency: "RUB",
      },
      category: {
        id: `342-${value}`,
        config: {
          highlight: "blue",
          icon: "map",
        },
        name: "Еда",
        transactions: [],
      },
      name: "Пицца",
      created_at: "12 февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
  {
    title: "Вчера",
    transactions: range(0, 3).map((value) => ({
      id: `sol-${value}`,
      amount: {
        amount: 15 * value,
        currency: "RUB",
      },
      category: {
        id: `342-${value}`,
        config: {
          highlight: "blue",
          icon: "map",
        },
        name: "Еда",
        transactions: [],
      },
      name: "Пицца",
      created_at: "12 февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
  {
    title: "5 Мар.",
    transactions: range(0, 2).map((value) => ({
      id: `sol-${value}`,
      amount: {
        amount: 15 * value,
        currency: "RUB",
      },
      category: {
        id: `342-${value}`,
        config: {
          highlight: "blue",
          icon: "map",
        },
        name: "Еда",
        transactions: [],
      },
      name: "Роллы",
      created_at: "12 февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
];

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <View style={styles.layout}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15 }}
        data={transactions}
        keyExtractor={(group) => group.title}
        renderItem={(groups) => (
          <TransactionGroup
            title={groups.item.title}
            transactions={groups.item.transactions}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: Gaps.g20,
  },
});
