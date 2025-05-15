import type { FC } from "react";
import { ActivityIndicator } from "react-native";

import type { SpinnerProps } from "./Spinner.props";

export const Spinner: FC<SpinnerProps> = ({ size }) => {
	return <ActivityIndicator size={size} />;
};
