import { type FC } from "react";
import { TouchableOpacity, View } from "react-native";

import { HighlightColor } from "@/entities/themes/const";

import type { SelectHighlightColorProps } from "./SelectHighlightColor.props";
import { useStyles } from "./SelectHighlightColor.styles";

export const SelectHighlightColor: FC<SelectHighlightColorProps> = ({
	onSelect
}) => {
	const styles = useStyles();
	const highlightColorEntries = Object.entries(HighlightColor);
	console.log(highlightColorEntries[0][1]);

	return (
		<View style={styles.list}>
			{highlightColorEntries.map((entry) => {
				const highlight = entry[1];

				return (
					<TouchableOpacity
						key={highlight.primary}
						style={[styles.box, { backgroundColor: highlight.dimmed }]}
						onPress={() => onSelect(highlight)}
					>
						<View
							style={[styles.dot, { backgroundColor: highlight.primary }]}
						></View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
