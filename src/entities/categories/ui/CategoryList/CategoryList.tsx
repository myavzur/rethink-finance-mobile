import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { type FC } from "react";
import { FlatList, Text, View } from "react-native";

import { CategoryCard } from "@/entities/categories/ui/CategoryCard/CategoryCard";

import { Gaps } from "@/shared/const";
import { categoryRepository } from "@/shared/database/repositories";

import type { CategoryListProps } from "./CategoryList.props";
import { useStyles } from "./CategoryList.styles";

export const CategoryList: FC<CategoryListProps> = ({
	withHeader,
	onSelectCategory,
	selectedCategoryId
}) => {
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
				renderItem={({ item }) => {
					const isActive = selectedCategoryId === item.id;

					return (
						<CategoryCard
							key={item.id}
							category={item}
							onPress={onSelectCategory}
							isActive={isActive}
						/>
					);
				}}
			/>
		</View>
	);
};
