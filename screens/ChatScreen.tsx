import * as React from "react";
import {FlatList, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import ChatItem from "../components/ChatItem";
import chatRooms from "../data/chatRooms";
import NewMessageButton from "../components/NewMessageButton";

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={chatRooms}
                renderItem={({item}) => <ChatItem chatRoom={item}/>}
                keyExtractor={(item) => item.id}
            />
            <NewMessageButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    list: {
        width: "100%",
    },
});
