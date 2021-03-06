/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    ChatRoom: undefined;
    Contacts: undefined;
};

export type MainTabParamList = {
    Camera: undefined;
    Chats: undefined;
    Status: undefined;
    Calls: undefined;
};

export type TabOneParamList = {
    ChatScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};
export type User = {
    id: String;
    name: String;
    imageUri: String;
    status: String;
};

export type ChatUser = {
    id: String;
    name: String;
};

export type Message = {
    id: String;
    content: String;
    createdAt: string;
};

export type ChatRoom = {
    id: String;
    users: User[];
    lastMessage: Message;
};
export type ChatMessage = {
    id: String,
    content: String,
    createdAt: string,
    user: ChatUser
};
