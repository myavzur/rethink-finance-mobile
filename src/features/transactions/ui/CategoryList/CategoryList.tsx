import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC } from "react";
import { FlatList, Text, View } from "react-native";

import { CategoryCard } from "@/entities/transactions/ui/CategoryCard/CategoryCard";

import { databaseRepository } from "@/shared/database/repositories/database.repository";

import type { CategoryListProps } from "./CategoryList.props";
import { useStyles } from "./CategoryList.styles";

export const CategoryList: FC<CategoryListProps> = ({ onSelect }) => {
	const styles = useStyles();

	const { data: categories } = useLiveQuery(
		databaseRepository.db.query.categories.findMany()
	);

	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.date}>Категории</Text>
				<Text style={styles.amount}>{categories.length}</Text>
			</View>

			<FlatList
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: 10 }}
				data={categories}
				keyExtractor={(category) => category.id.toString()}
				renderItem={(category) => <CategoryCard category={category.item} />}
			/>
		</View>
	);
};
