import { Text, type TextStyle } from 'react-native';

import { FontSizes, FontWeights } from '@/shared/const';
import { useMemo } from 'react';
import { useTheme } from '../../lib/hooks';
import type { ColorPalette, ColorShade } from '../../types';
import type { ThemedTextProps } from './ThemedText.props';

export const ThemedText = <P extends keyof ColorPalette>({
  size = "s16",
	weight = "w400",
  color,
  style,
  ...rest
}: ThemedTextProps<P>) => {
  const theme = useTheme();

  const [palette, shade] = (color?.split('-') ?? ['accent', '1000']) as [
    P,
    ColorShade<P>
  ];

  const textStyle: TextStyle = useMemo(() => {
    const styles: TextStyle = {
      fontSize: FontSizes[size],
      fontWeight: FontWeights[weight],
    }

    if (color) {
      styles.color = theme.colors[palette][shade] as string;
    }

    return styles;
  }, [color, size, weight, theme, palette, shade]);

  return (
    <Text
      style={[style, textStyle]}
      {...rest}
    />
  );
}
