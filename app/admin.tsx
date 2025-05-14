import { databaseRepository } from "@/shared/database/repositories/database.repository";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AdminScreen() {
	const { data: categories } = useLiveQuery(
		databaseRepository.db.query.categories.findMany()
	);

	return (
		<View>
			<Link href={"/"}>Home</Link>
			<Text>Categories</Text>
			{categories.map((category) => {
				return <Text key={category.id}>{category.id} / {category.name} {category.icon_name}</Text>
			})}
		</View>
	)
};
