import { StyleSheet } from "react-native";

import { Borders, Font, Gaps } from "@/shared/const";

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
		fontSize: Font.size.s16,
		fontWeight: Font.weight.bold
	},
	content: {
		marginTop: Gaps.g15
	}
});
