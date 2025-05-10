import { Colors } from "@/src/shared/const/Colors";
import { FontSizes } from "@/src/shared/const/FontSizes";
import { Gaps } from "@/src/shared/const/Gaps";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: Gaps.g10,
	},

	date: {
		fontSize: FontSizes.s16,
		fontWeight: 600,
	},

	amount: {
		fontSize: FontSizes.s16,
		fontWeight: 500,
		color: Colors.gray1000
	},
});
