import type { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "./MainLayout.styles";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const styles = useStyles();

	return (
		<View style={styles.layout}>{children}</View>
	)
};
