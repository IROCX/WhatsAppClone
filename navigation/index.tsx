/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {DarkTheme, DefaultTheme, NavigationContainer,} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {ColorSchemeName} from "react-native";
import {View} from "../components/Themed";
import Colors from "../constants/Colors";
import {RootStackParamList} from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

import {FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";

export default function Navigation({
                                       colorScheme,
                                   }: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.light.tint,
                    elevation: 0,
                },
                headerTintColor: Colors.light.background,
                headerTitleAlign: "left",
                headerTitleStyle: {},
            }}
        >
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View
                            style={{flexDirection: "row", backgroundColor: "transparent"}}
                        >
                            <Octicons
                                name="search"
                                size={22}
                                color={"white"}
                                style={{marginHorizontal: 10}}
                            />
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={22}
                                color={"white"}
                                style={{marginHorizontal: 10}}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => ({
                    title: route?.params?.name,
                    headerRight: () => (
                        <View style={{
                            width: 100,
                            justifyContent: "space-between",
                            flexDirection: "row",
                            backgroundColor: "transparent"
                        }}>
                            <MaterialIcons name={"call"} size={22} color={"#fff"}/>
                            <FontAwesome5 name={"video"} size={22} color={"#fff"}/>
                            <MaterialCommunityIcons name={"dots-vertical"} size={22} color={"#fff"}/>
                        </View>
                    )
                })}
            />
        </Stack.Navigator>
    );
}
