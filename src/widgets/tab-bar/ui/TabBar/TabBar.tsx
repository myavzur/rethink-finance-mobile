import { type FC } from "react";
import { View } from "react-native";

import { CreateTransactionButton } from "@/features/create-transaction-button/ui";

import { Tab } from "./Tab";
import type { TabBarProps } from "./TabBar.props";
import { useStyles } from "./TabBar.styles";

export const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation }) => {
	const styles = useStyles();

	const routesMidIndex = Math.floor(state.routes.length / 2);

	return (
		<View style={styles.navigation}>
			{state.routes.slice(0, routesMidIndex).map((route, index) => (
				<Tab
					key={route.key}
					index={index}
					descriptors={descriptors}
					navigation={navigation}
					route={route}
					state={state}
				/>
			))}

			<View style={styles.control}>
				<CreateTransactionButton />
			</View>

			{state.routes.slice(routesMidIndex).map((route, index) => {
				const tabIndex = index + routesMidIndex;

				return (
					<Tab
						key={route.key}
						index={tabIndex}
						descriptors={descriptors}
						navigation={navigation}
						route={route}
						state={state}
					/>
				);
			})}
		</View>
	);
};
