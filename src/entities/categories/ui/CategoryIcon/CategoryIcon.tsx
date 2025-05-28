import { type FC, useMemo } from "react";
import { Text, View } from "react-native";

import { Icon } from "@/shared/ui";

import type { CategoryIconProps } from "./CategoryIcon.props";
import { useStyles } from "./CategoryIcon.styles";

export const CategoryIcon: FC<CategoryIconProps> = ({
	iconName,
	highlightColor,
	size
}) => {
	const styles = useStyles(highlightColor);

	const sizing = useMemo(() => {
		if (size === "medium")
			return {
				wrapperSize: 45,
				iconSize: 22.5
			};

		return {
			wrapperSize: 40,
			iconSize: 20
		};
	}, [size]);

	return (
		<View
			style={[
				styles.icon,
				{
					width: sizing.wrapperSize
				}
			]}
		>
			<Text style={styles.icon__inline}>
				<Icon
					name={iconName}
					size={sizing.iconSize}
				/>
			</Text>
		</View>
	);
};
