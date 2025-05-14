import { ThemedText } from "@/entities/themes/ui/ThemedText";
import { Icon } from "@/shared/ui";
import type { FC } from "react";
import { Text, View } from "react-native";
import type { CategoryCardProps } from "./CategoryCard.props";
import { useStyles } from "./CategoryCard.styles";

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
	const styles = useStyles(category.highlight_color);

	return (
		<View style={styles.card}>
			<View style={styles.icon}>
				<Text style={styles.icon__inline}>
					<Icon name={category.icon_name} size={20} />
				</Text>
			</View>

			<ThemedText size="s14">{category.name}</ThemedText>
		</View>
	)
};
