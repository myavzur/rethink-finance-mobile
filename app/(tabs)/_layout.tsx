import { Tabs } from "expo-router";
import React from "react";

import { TabBar } from "@/widgets/tab-bar/ui";

import { useTheme } from "@/entities/themes/lib/hooks";

import { Icon } from "@/shared/ui";
import { UI_ICONS } from "@/shared/const";
import { useIntl } from "react-intl";

const ICON_SIZE = 23;

export default function Layout() {
	const theme = useTheme();
	const intl = useIntl();

	return (
		<Tabs
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				sceneStyle: {
					backgroundColor: theme.colors.background
				},
				headerShown: false
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: intl.formatMessage({ id: "tabbar_home" }),
					tabBarIcon: ({ color }) => (
						<Icon
							size={ICON_SIZE}
							name={UI_ICONS.tabbar_history}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="categories"
				options={{
					title: intl.formatMessage({ id: "tabbar_categories" }),
					tabBarIcon: ({ color }) => (
						<Icon
							size={ICON_SIZE}
							name={UI_ICONS.tabbar_categories}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="analysis"
				options={{
					title: intl.formatMessage({ id: "tabbar_analysis" }),
					tabBarIcon: ({ color }) => (
						<Icon
							size={ICON_SIZE}
							name={UI_ICONS.tabbar_analysis}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: intl.formatMessage({ id: "tabbar_settings" }),
					tabBarIcon: ({ color }) => (
						<Icon
							size={ICON_SIZE}
							name={UI_ICONS.tabbar_settings}
							color={color}
						/>
					)
				}}
			/>
		</Tabs>
	);
}
