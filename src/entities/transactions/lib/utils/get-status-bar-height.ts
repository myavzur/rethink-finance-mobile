import { Platform, StatusBar } from "react-native";

export const getStatusBarHeight = () => {
	if (Platform.OS === "ios") return 0;

	return StatusBar.currentHeight;
};
