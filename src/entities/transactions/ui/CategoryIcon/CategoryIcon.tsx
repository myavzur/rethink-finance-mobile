import type { FC } from "react";
import { Text, View } from "react-native";

import { Icon } from "@/shared/ui";

import type { CategoryIconProps } from "./CategoryIcon.props";
import { useStyles } from "./CategoryIcon.styles";

export const CategoryIcon: FC<CategoryIconProps> = ({
	iconName,
	highlightColor
}) => {
	const styles = useStyles(highlightColor);

	return (
		<View style={styles.icon}>
			<Text style={styles.icon__inline}>
				<Icon
					name={iconName}
					size={20}
				/>
			</Text>
		</View>
	);
};
