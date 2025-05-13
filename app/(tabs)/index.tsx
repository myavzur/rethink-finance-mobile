import type { Transaction } from "@/entities/transactions/types";
import { TransactionGroup } from "@/entities/transactions/ui";
import { range } from "@/shared/lib/utils";
import { MainLayout } from "@/shared/ui";
import { FlatList } from "react-native";

const transactions: { transactions: Transaction[]; title: string }[] = [
  {
    title: "Сегодня",
    transactions: range(0, 4).map((value) => ({
      id: `sol-${value}`,
      amount_value: 15 * value,
      amount_currency: "RUB",
      category: {
        id: `342-${value}`,
        highlight_color: "AMETHYST",
        icon_name: "activity",
        name: "Еда",
        transactions: [],
      },
      name: "Пицца",
      created_at: "12 Февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
  {
    title: "Вчера",
    transactions: range(0, 3).map((value) => ({
      id: `sol-${value}`,
      amount_value: 15 * value,
      amount_currency: "RUB",
      category: {
        id: `342-${value}`,
        highlight_color: "ROYAL_BLUE",
        icon_name: "bookmark",
        name: "Еда",
        transactions: [],
      },
      name: "Пицца",
      created_at: "12 Февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
  {
    title: "5 Марта",
    transactions: range(0, 2).map((value) => ({
      id: `sol-${value}`,
      amount_value: 15 * value,
      amount_currency: "RUB",
      category: {
        id: `342-${value}`,
        highlight_color: "HOT_PINK",
        icon_name: "award",
        name: "Еда",
        transactions: [],
      },
      name: "Роллы",
      created_at: "12 Февраля",
      type: 1,
      description: "Насрал в штаны",
    })),
  },
];

export default function Tab() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
