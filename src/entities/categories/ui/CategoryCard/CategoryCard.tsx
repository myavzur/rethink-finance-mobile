import { type FC, memo } from "react";
import { Pressable, Text } from "react-native";

import { CategoryIcon } from "../CategoryIcon";
import type { CategoryCardProps } from "./CategoryCard.props";
import { useStyles } from "./CategoryCard.styles";

export const CategoryCardComponent: FC<CategoryCardProps> = ({ category, onPress, isActive }) => {
	const styles = useStyles(category.highlight_color);

	return (
		<Pressable
			onPress={() => onPress(category)}
			style={({ pressed }) => {
				const isActiveOrPressed = pressed || isActive;
				return [styles.card, isActiveOrPressed && styles.card_active]
			}}
		>
			<CategoryIcon
				iconName={category.icon_name}
				highlightColor={category.highlight_color}
			/>

			<Text style={styles.name}>{category.name}</Text>
		</Pressable>
	);
};

export const CategoryCard = memo(CategoryCardComponent);
