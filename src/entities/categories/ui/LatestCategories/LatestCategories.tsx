import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import type { FC } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { CategoryIcon } from "@/entities/categories/ui";

import { Gaps } from "@/shared/const";
import { categoryRepository } from "@/shared/database/repositories";

import type { LatestCategoriesProps } from "./LatestCategories.props";

export const LatestCategories: FC<LatestCategoriesProps> = ({
	onSelectCategory
}) => {
	const { data: categories } = useLiveQuery(categoryRepository.getAll());

	return (
		<FlatList
			contentContainerStyle={{
				gap: Gaps["latest-categories-list"]
			}}
			horizontal={true}
			data={categories}
			keyExtractor={(category) => category.id.toString()}
			renderItem={({ item }) => {
				return (
					<TouchableOpacity
						key={item.id}
						onPress={() => onSelectCategory(item)}
					>
						<CategoryIcon
							size="medium"
							iconName={item.icon_name}
							highlightColor={item.highlight_color}
						/>
					</TouchableOpacity>
				);
			}}
		/>
	);
};
