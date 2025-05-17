import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { TransactionCard } from "@/entities/transactions/ui";

import { transactionRepository } from "@/shared/database/repositories";
import type { TransactionWithCategory } from "@/shared/database/schema";
import { MainLayout, Spinner } from "@/shared/ui";
import { Button } from "@/shared/ui/Button/Button";

export default function TransactionScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams();

	const { data: transaction } = useLiveQuery(
		transactionRepository.getById(Number(id))
	);

	const handleDelete = () => {
		transactionRepository.delete(Number(id)).then(() => {
			router.back();
		});
	};

	if (!transaction) return <Spinner size="large" />;

	return (
		<MainLayout>
			<TransactionCard transaction={transaction as TransactionWithCategory} />

			<View style={{ flex: 1 }}></View>

			<Button
				kind="fill"
				onPress={handleDelete}
			>
				Delete {transaction.id}
			</Button>
		</MainLayout>
	);
}
