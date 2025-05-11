import { FontSizes, FontWeights, Gaps } from "@/shared/const";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	accordion: {
		// backgroundColor: "red"
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		gap: Gaps.g10
	},
	title: {
		fontSize: FontSizes.s16,
		fontWeight: FontWeights.bold
	},
	content: {}
});