import * as React from "react";
import {FlatList, StyleSheet} from "react-native";
import {View} from "../components/Themed";
import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={users}
                renderItem={({item}) => <ContactListItem user={item}/>}
                keyExtractor={(item) => item.id}
            />
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
