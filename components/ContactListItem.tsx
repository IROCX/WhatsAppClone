import {Image, StyleSheet, Text, TouchableWithoutFeedback, View,} from "react-native";

import React from "react";
import {User} from "../types";
// @ts-ignore
import sample from "./../assets/images/icon.png";
import {useNavigation} from "@react-navigation/native";

export type ContactListItemProps = {
    user: User;
};

function ContactListItem(props: ContactListItemProps) {
    const {user} = props;

    const navigation = useNavigation();

    const contactClickHandler = () => {
        //navigate to new chatroom with this user
        // navigation.navigate("ChatRoom", {id: chatRoom.id, name: user.name, profilePic: user.imageUri});
    };

    return (
        <TouchableWithoutFeedback onPress={contactClickHandler}>

            <View style={styles.chatItem}>
                <Image source={sample} style={styles.profilePic}/>

                <View style={styles.content}>
                    <Text style={styles.title}>{user.name}</Text>
                    <Text style={styles.status} numberOfLines={1}>
                        {user.status}
                    </Text>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}

export default ContactListItem;

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
    status: {
        fontSize: 13,
        color: "grey",
    },
});
