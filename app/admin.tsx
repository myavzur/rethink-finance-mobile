import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useRouter } from "expo-router";
import { ScrollView, Text } from "react-native";

import { transactionRepository } from "@/shared/database/repositories";
import { databaseRepository } from "@/shared/database/repositories/database.repository";
import { MainLayout } from "@/shared/ui";
import { Button } from "@/shared/ui/Button/Button";

export default function AdminScreen() {
	const router = useRouter();

	const { data: categories } = useLiveQuery(
		databaseRepository.db.query.categories.findMany()
	);

	const { data: transactions } = useLiveQuery(
		databaseRepository.db.query.transactions.findMany()
	);

	const addTransaction = () => {
		transactionRepository.create({
			name: "Бургер",
			amount_value: 69,
			amount_currency: "RUB",
			description: "Курица",
			type: 0,
			category_id: 1
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
						{transaction.created_at.toString()}
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
