import type { FC } from "react";
import { View } from "react-native";

import type { SelectIconProps } from "./SelectIcon.props";
import { useStyles } from "./SelectIcon.styles";

export const SelectIcon: FC<SelectIconProps> = ({ onSelect }) => {
	const styles = useStyles();

	return (
		<View style={styles.list}>
			<View style={styles.icon}></View>
		</View>
	);
};
