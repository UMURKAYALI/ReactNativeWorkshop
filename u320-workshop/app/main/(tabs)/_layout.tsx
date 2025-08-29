import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/TabBarBackground";
import { Colors } from "@/constants/Colors";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";
import React from "react";
import { Platform, useColorScheme } from "react-native";

export default function TabLayout() {

    const colorScheme = useColorScheme();

    return (
        <Tabs screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen name="index" options={ {title: 'Mesajlar', tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />} }></Tabs.Screen>
            <Tabs.Screen name="contacts" options={ {title: 'Kisiler' , tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-book" color={color} />} }></Tabs.Screen>
            <Tabs.Screen name="calendar" options={ {title: 'Takvim', tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />} }></Tabs.Screen>
            <Tabs.Screen name="settings" options={ {title: 'Ayarlar', tabBarIcon: ({ color }) => <FontAwesome size={28} name="gears" color={color} />} }></Tabs.Screen>
        </Tabs>
    )
}