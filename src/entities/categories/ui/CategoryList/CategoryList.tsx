import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC } from "react";
import { FlatList, Text, View } from "react-native";

import { CategoryCard } from "@/entities/categories/ui/CategoryCard/CategoryCard";

import { categoryRepository } from "@/shared/database/repositories";
import type { Category } from "@/shared/database/schema";

import type { CategoryListProps } from "./CategoryList.props";
import { useStyles } from "./CategoryList.styles";
import { Gaps } from "@/shared/const";

export const CategoryList: FC<CategoryListProps> = ({ withHeader, onSelectCategory }) => {
	const styles = useStyles();

	const { data: categories } = useLiveQuery(categoryRepository.getAll());

	return (
		<View>
			{withHeader && (
				<View style={styles.header}>
					<Text style={styles.date}>Категории</Text>
					<Text style={styles.amount}>{categories.length}</Text>
				</View>
			)}

			<FlatList
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: Gaps["category-and-transaction-list"] }}
				data={categories}
				keyExtractor={(category) => category.id.toString()}
				renderItem={(category) => (
					<CategoryCard
						onPress={() => onSelectCategory(category.item)}
						category={category.item}
					/>
				)}
			/>
		</View>
	);
};
