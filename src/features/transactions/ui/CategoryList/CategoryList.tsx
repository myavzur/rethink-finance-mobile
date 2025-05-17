import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC } from "react";
import { FlatList, Text, View } from "react-native";

import { CategoryCard } from "@/entities/transactions/ui/CategoryCard/CategoryCard";

import { categoryRepository } from "@/shared/database/repositories";
import type { Category } from "@/shared/database/schemas";

import type { CategoryListProps } from "./CategoryList.props";
import { useStyles } from "./CategoryList.styles";

export const CategoryList: FC<CategoryListProps> = ({ onSelect }) => {
	const styles = useStyles();

	const { data: categories } = useLiveQuery(categoryRepository.getAll());

	const handleCategorySelect = (category: Category) => {
		onSelect(category);
	};

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
				renderItem={(category) => (
					<CategoryCard
						onPress={() => handleCategorySelect(category.item)}
						category={category.item}
					/>
				)}
			/>
		</View>
	);
};
