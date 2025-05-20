import type { FC } from "react";
import { Pressable, Text } from "react-native";

import { CategoryIcon } from "../CategoryIcon";
import type { CategoryCardProps } from "./CategoryCard.props";
import { useStyles } from "./CategoryCard.styles";

export const CategoryCard: FC<CategoryCardProps> = ({ category, onPress }) => {
	const styles = useStyles(category.highlight_color);

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.card, pressed && styles.card_active]}
		>
			<CategoryIcon
				iconName={category.icon_name}
				highlightColor={category.highlight_color}
			/>

			<Text style={styles.name}>{category.name}</Text>
		</Pressable>
	);
};
