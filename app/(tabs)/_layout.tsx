import { useTheme } from "@/entities/themes/lib/hooks";
import { Icon } from "@/shared/ui/Icon";
import { Tabs } from "expo-router";
import React from "react";

const ICON_SIZE = 22;

export default function TabLayout() {
  const theme = useTheme();

  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.accent[1000],
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "History",
            tabBarIcon: ({ color }) => (
              <Icon size={ICON_SIZE} name="server" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            tabBarIcon: ({ color }) => (
              // Or maybe "box" is better?
              <Icon size={ICON_SIZE} name="package" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="analysis"
          options={{
            title: "Analysis",
            tabBarIcon: ({ color }) => (
              <Icon size={ICON_SIZE} name="activity" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Icon size={ICON_SIZE} name="sliders" color={color} />
            ),
          }}
        />
      </Tabs>
  );
}
