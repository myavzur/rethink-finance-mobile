import type { Transaction } from "@/entities/transactions/types";
import { TransactionGroup } from "@/entities/transactions/ui";
import { range } from "@/shared/lib/utils";
import { FlatList } from "react-native";


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
        highlightColor: "AMETHYST",
        iconName: "activity",
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
        highlightColor: "ROYAL_BLUE",
        iconName: "bookmark",
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
        highlightColor: "HOT_PINK",
        iconName: "award",
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

export default function Tab() {
  return (
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
  );
}

