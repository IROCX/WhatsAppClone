import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

function ChatRoomScreen() {
  const route = useRoute();
  const { id } = route.params;

  return (
    <View>
      <Text>Chat Room is here.{id}</Text>
    </View>
  );
}

export default ChatRoomScreen;
