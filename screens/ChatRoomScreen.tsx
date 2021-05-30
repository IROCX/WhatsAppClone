import React from "react";
import {FlatList, ImageBackground} from "react-native";
import {useRoute} from "@react-navigation/native";
import chats from "../data/chats";
import MessageItem from "../components/MessageItem";
import ChatBackground from "./../assets/images/chatBackground.png"
function ChatRoomScreen() {
    const route = useRoute();
    // const {id} = route.params;

    return (
        <ImageBackground style={{width:"100%", height:"100%"}} source={ChatBackground}>
            <FlatList
                data={chats.messages}
                renderItem={({item}) => (
                    <MessageItem message={item}/>
                )}
                inverted={true}
            />
        </ImageBackground>
    );
}

export default ChatRoomScreen;
