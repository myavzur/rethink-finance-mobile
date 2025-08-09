import type { FC } from "react";
import { View } from "react-native";

import { useStyles } from "./MainLayout.styles";

interface MainLayoutProps {
	withPaddingBottomForTabbar?: boolean;
	children?: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
	children,
	withPaddingBottomForTabbar = true
}) => {
	const styles = useStyles(withPaddingBottomForTabbar);

	return <View style={styles.layout}>{children}</View>;
};
