import FeatherIcons from '@expo/vector-icons/Feather';
import { type SymbolWeight } from 'expo-symbols';
import { type ComponentProps } from 'react';
import type { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
// export const MAPPING = {
//   'house.fill': 'home',
//   'paperplane.fill': 'send',
//   'chevron.left.forwardslash.chevron.right': 'code',
//   'chevron.right': 'chevron-right',
// } as IconMapping;


// type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof FeatherIcons>['name']>;
// type IconSymbolName = keyof typeof MAPPING;

export interface IconProps {
  name: ComponentProps<typeof FeatherIcons>['name'];
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}