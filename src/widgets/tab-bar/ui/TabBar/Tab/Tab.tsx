import { useTheme } from "@/entities/themes/lib/hooks";
import { getTabLabelFromOptions } from "@/widgets/tab-bar/lib/utils";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { useMemo, type FC } from "react";
import { Text, View } from "react-native";
import type { TabProps } from "./Tab.props";
import { useStyles } from "./Tab.styles";

export const Tab: FC<TabProps> = ({
  index,
  descriptors,
  navigation,
  route,
  state,
}) => {
  const { buildHref } = useLinkBuilder();
  const { options } = descriptors[route.key];

  const theme = useTheme();
  const styles = useStyles();

  const colors = useMemo(() => {
    return {
      idle: theme.colors.gray[1100],
      active: theme.colors.accent[1000],
      activeBackground: theme.colors.accent["glassed-1000"],
    };
  }, [theme]);

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
    <View style={styles.wrapper}>
      <PlatformPressable
        style={styles.item}
        pressColor={colors.activeBackground}
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
    </View>
  );
};
