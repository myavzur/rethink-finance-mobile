import type { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Font, Gaps } from "@/shared/const";
import type { PageHeaderProps } from "./PageHeader.props";

export const PageHeader: FC<PageHeaderProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingVertical: Gaps.mainLayoutHeaderGap,
	},
	title: {
		fontSize: 18,
		fontWeight: Font.weight.semiBold
	}
});
