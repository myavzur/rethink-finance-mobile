import { MainLayout } from "@/shared/ui";
import { Link } from "expo-router";

export default function Tab() {
  return (
    <MainLayout>
      <Link href="/admin">Admin</Link>
    </MainLayout>
  );
}

/*
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
      */