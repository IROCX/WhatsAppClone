import React from "react"
import {StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {useNavigation} from "@react-navigation/native";

const NewMessageButton = () => {

    const navigation = useNavigation();

    const newMessageHandler = () => {
        navigation.navigate("Contacts")
    }

    return (
        <TouchableOpacity style={styles.container} onPress={newMessageHandler}>
            <MaterialCommunityIcons name={"message-reply-text"} size={24} color={"#fff"}/>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        bottom: 0,
        right: 0
    }
})

export default NewMessageButton