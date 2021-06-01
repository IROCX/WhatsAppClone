import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import React from "react";
import { ChatRoom } from "../types";
// @ts-ignore
import sample from "./../assets/images/icon.png";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../navigation/index";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

function ChatItem(props: ChatListItemProps) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const chatRoomClickHandler = () => {
    // console.warn(`chatoom clicked ${user.name}`)
    navigation.navigate("ChatRoom", { id: chatRoom.id, name:user.name, profilePic:user.imageUri });
  };

  return (
    <TouchableWithoutFeedback onPress={chatRoomClickHandler}>
      <View style={styles.chatItem}>
        {/* <Image source={{uri:user.imageUri}} style={styles.profilePic} />  when the user image uri in the data is valid*/}

        <Image source={sample} style={styles.profilePic} />
        <View style={styles.content}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>

        <Text style={styles.timestamp}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChatItem;

const styles = StyleSheet.create({
  chatItem: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,

    // backgroundColor:'blue',
    alignContent: "center",
    justifyContent: "center",
  },
  profilePic: {
    alignSelf: "center",
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  timestamp: {
    padding: 20,
    color: "grey",
    fontSize: 12,
  },
  lastMessage: {
    fontSize: 13,
    color: "grey",
  },
});
