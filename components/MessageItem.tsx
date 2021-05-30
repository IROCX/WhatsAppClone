import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {ChatMessage} from "../types";
import moment from "moment";
import Colors from "../constants/Colors";

export type ChatMessageProps = {
    message: ChatMessage
}

const MessageItem = (props: ChatMessageProps) => {

    const {message} = props

    const isMyMessage = () => {
        return message.user.id === "u1"
    }


    return (
        <View style={[
            styles.messageContainer,
            {
                backgroundColor: isMyMessage() ? "#dcf8c5" : "#eaeaea",
                marginLeft: isMyMessage() ? 50 : 10,
                marginRight: isMyMessage() ? 10 : 50
            }]}>
            {!isMyMessage() && <Text style={styles.userContent}>
                {message.user.name}
            </Text>}
            <Text style={styles.messageContent}>
                {message.content}
            </Text>
            <Text style={styles.timeContent}>
                {moment(message.createdAt).fromNow()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    userContent: {
        fontSize: 13,
        color: Colors.light.tint,
        fontWeight:"bold",
        marginBottom: 5,
        letterSpacing:0.5
    },
    messageContent: {
        fontSize: 15
    },
    timeContent: {
        fontSize: 10,
        textAlign:"right",
        letterSpacing:0.75,
        color:"#444444"
    }
})

export default MessageItem