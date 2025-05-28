import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import type { FC } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { CategoryIcon } from "@/entities/categories/ui";

import { categoryRepository } from "@/shared/database/repositories";

import type { LatestCategoriesProps } from "./LatestCategories.props";
import { Gaps } from "@/shared/const";

export const LatestCategories: FC<LatestCategoriesProps> = ({ onSelectCategory }) => {
	const { data: categories } = useLiveQuery(categoryRepository.getAll());

	return (
		<FlatList
			contentContainerStyle={{
				gap: Gaps["latest-categories-list"]
			}}
			horizontal={true}
			data={categories}
			keyExtractor={(category) => category.id.toString()}
			renderItem={(category) => (
				<TouchableOpacity onPress={() => onSelectCategory(category.item)}>
					<CategoryIcon
						size="medium"
						iconName={category.item.icon_name}
						highlightColor={category.item.highlight_color}
					/>
				</TouchableOpacity>
			)}
		/>
	);
};
