import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const getTabLabelFromOptions = (
	options: BottomTabNavigationOptions,
	fallback = "NONE"
) => {
	if (options.tabBarLabel !== undefined) return options.tabBarLabel;
	if (options.title !== undefined) return options.title;

	return fallback;
};