import { StyleSheet } from "react-native";

import { Borders, FontSizes, FontWeights, Gaps } from "@/shared/const";

export const styles = StyleSheet.create({
	accordion: {
		// backgroundColor: "red"
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		gap: Gaps.g10,
		borderRadius: Borders.b10
	},
	title: {
		fontSize: FontSizes.s16,
		fontWeight: FontWeights.bold
	},
	content: {
		marginTop: Gaps.g15
	}
});
