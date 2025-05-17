import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";

import { formatCreatedAt } from "@/entities/transactions/lib/utils";
import {
	categoryRepository,
	transactionRepository
} from "@/shared/database/repositories";
import { MainLayout } from "@/shared/ui";
import { Button } from "@/shared/ui/Button/Button";

export default function AdminScreen() {
	const router = useRouter();

	const { data: categories } = useLiveQuery(categoryRepository.getAll());
	const { data: transactions } = useLiveQuery(transactionRepository.getAll());

	const addTransaction = () => {
		transactionRepository.create({
			name: "ул. Зеленина 8",
			amount_value: 5290,
			amount_currency: "RUB",
			type: 0,
			category_id: 2
		});
	};

	return (
		<MainLayout>
			<Button
				kind="fill"
				onPress={() => router.back()}
			>
				Back to Home
			</Button>

			<ScrollView style={{ flex: 1 }}>
				<Text style={{ marginTop: 10 }}>Categories</Text>
				{categories.map((category) => (
					<Text key={category.id}>
						{category.id} / {category.name}
					</Text>
				))}

				<Text style={{ marginTop: 10 }}>Transactions</Text>

				{transactions?.map((transaction) => (
					<Text key={transaction.id}>
						{transaction.id} / {transaction.name} at{" "}
						{formatCreatedAt(transaction.created_at)}{" "}
						category: ({transaction.type})
					</Text>
				))}

				<Button
					kind="outline"
					onPress={addTransaction}
				>
					Add mock transaction
				</Button>
			</ScrollView>
		</MainLayout>
	);
}
