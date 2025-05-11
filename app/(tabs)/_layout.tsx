import { Icon } from "@/shared/ui/Icon";
import { TabBar } from "@/widgets/tab-bar/ui";
import { Tabs } from "expo-router";
import React from "react";

const ICON_SIZE = 23;

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        animation: "shift",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <Icon size={ICON_SIZE} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Icon size={ICON_SIZE} name="box" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analysis",
          tabBarIcon: ({ color }) => (
            <Icon size={ICON_SIZE} name="airplay" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon size={ICON_SIZE} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
