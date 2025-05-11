import { useTheme } from "@/entities/themes/lib/hooks";
import { PlatformPressable, Text } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { useMemo, type FC } from "react";
import { View } from "react-native";
import { getTabLabelFromOptions } from "../../lib/utils";
import type { TabBarProps } from "./TabBar.props";
import { useStyles } from "./TabBar.styles";

export const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();

  const theme = useTheme();
  const styles = useStyles();

  const colors = useMemo(() => {
    return {
      idle: theme.colors.gray[1100],
      active: theme.colors.accent[1000],
      activeBackground: theme.colors.accent["glassed-1000"],
    };
  }, [theme]);

  return (
    <View style={styles.navigation}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;
        const label = getTabLabelFromOptions(options, route.name);

        const handlePress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          const isPreventNavigate = isFocused || event.defaultPrevented;
          if (isPreventNavigate) return;

          navigation.navigate(route.name, route.params);
        };

        const handleLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            style={styles.item}
            pressColor={colors.activeBackground}
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={handlePress}
            onLongPress={handleLongPress}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? colors.active : colors.idle,
                size: 20,
              })}

            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? colors.active : colors.idle,
                },
              ]}
            >
              {label as string}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
