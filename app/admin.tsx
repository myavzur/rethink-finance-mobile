import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { ScrollView, Text } from "react-native";

import { formatCreatedAt } from "@/entities/transactions/lib/utils";

import {
	categoryRepository,
	transactionRepository
} from "@/shared/database/repositories";
import { Button, MainLayout } from "@/shared/ui";

export default function AdminScreen() {
	const { data: categories } = useLiveQuery(categoryRepository.getAll());
	const { data: transactions } = useLiveQuery(transactionRepository.getAll());

	const addTransaction = () => {
		transactionRepository.create({
			comment: "ул. Зеленина 8",
			amount_value: 5290,
			amount_currency: "RUB",
			type: 1,
			category_id: 2
		});
	};

	const createInitialCategories = () => {
		categoryRepository.createInitial();
	};

	return (
		<MainLayout>
			<ScrollView style={{ flex: 1 }}>
				<Button
					kind="outline"
					onPress={createInitialCategories}
				>
					Create initial categories
				</Button>
				<Button
					kind="outline"
					onPress={addTransaction}
				>
					Add mock transaction
				</Button>

				<Text style={{ marginTop: 10 }}>Categories</Text>
				{categories.map((category) => (
					<Text key={category.id}>
						{category.id} / {category.name}
					</Text>
				))}

				<Text style={{ marginTop: 10 }}>Transactions</Text>

				{transactions?.map((transaction) => (
					<Text key={transaction.id}>
						{transaction.id} / {transaction.comment} at{" "}
						{formatCreatedAt(transaction.created_at)} category: ({transaction.type})
					</Text>
				))}
			</ScrollView>
		</MainLayout>
	);
}
