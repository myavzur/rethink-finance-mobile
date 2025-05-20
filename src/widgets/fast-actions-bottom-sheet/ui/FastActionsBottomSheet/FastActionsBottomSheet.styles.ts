import { StyleSheet } from "react-native";

import { Gaps } from "@/shared/const";

export const styles = StyleSheet.create({
	list: {
		flex: 1,
		gap: Gaps.g10
	},
	placeholder: {
		alignItems: "center"
	},
	sticker: {
		transform: [{ rotate: "-60deg" }],
		width: 150,
		height: 130
	}
});
