// Fallback for using MaterialIcons on Android and web.
import FeatherIcons from "@expo/vector-icons/Feather";

import type { FC } from "react";
import { type IconProps } from "./Icon.props";


/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  style,
}) => {
  return <FeatherIcons color={color} size={size} name={name} style={style} />;
}
