import React, {useState} from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ChatInput = () => {

    const [message, setMessage] = useState("")

    const onPressHandler = () => {
        if (message) {
            sendPressHandler()
        } else {
            micPressHandler()
        }
    }

    const micPressHandler = () => {
        console.warn("Mic")
    }
    const sendPressHandler = () => {
        console.warn("Sending - ", message)
        //send message to backend

        setMessage("")
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.chatSection}>
                <FontAwesome5 name={"laugh-beam"} size={24} color={"grey"}/>
                <TextInput
                    style={styles.chatInput}
                    placeholder={"Type a message..."}
                    multiline={true}
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name={"attachment"} size={24} color={"grey"} style={styles.icon}/>
                {!message && <Fontisto name={'camera'} size={24} color={"grey"} style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPressHandler}>
                <View style={styles.micSection}>
                    {message ?
                        <MaterialIcons name={"send"} size={24} color={"#fff"}/> :
                        <MaterialCommunityIcons name={"microphone"} size={24} color={"#fff"}/>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: "row",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    chatSection: {
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 10,
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 5,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    micSection: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    chatInput: {
        flex: 1,
        marginHorizontal: 10,
        flexWrap: "wrap",
        maxHeight: 60
    },
    icon: {
        marginHorizontal: 5
    }
})


export default ChatInput