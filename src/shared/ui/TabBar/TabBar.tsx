import { useTheme } from '@/entities/themes/lib/hooks';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import type { FC } from 'react';
import { View } from 'react-native';
import { Icon, type IconName } from '../Icon';
import type { TabBarProps } from './TabBar.props';
import { useStyles } from './TabBar.styles';

const getLabelFromOptions = (options: BottomTabNavigationOptions, fallback = "NONE") => {
  if (options.tabBarLabel !== undefined) return options.tabBarLabel;
  if (options.title !== undefined) return options.title;

  return fallback;
}

const ICON_MAPPING: Record<string, IconName> = {
  "index": "home",
  "categories": "box",
  "analysis": "airplay",
  "profile": "settings"
};

export const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const styles = useStyles();
  const theme = useTheme();

  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabs}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;
        const label = getLabelFromOptions(options, route.name);
        const iconName = ICON_MAPPING[route.name];

        const handlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          const isPreventNavigate = isFocused || event.defaultPrevented;
          if (isPreventNavigate) return;

          navigation.navigate(route.name, route.params);
        };

        const handleLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            style={styles.tabs__item}
            pressColor={theme.colors.accent['glassed-1000']}
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={handlePress}
            onLongPress={handleLongPress}
          >
            <Icon
              name={iconName}
              size={22}
              style={[
                styles.tabs__icon,
                isFocused && styles.tabs__icon_active
              ]}
            />

            <Text style={[
              styles.tabs__label,
              isFocused && styles.tabs__label_active
            ]}>
              {label as string}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
