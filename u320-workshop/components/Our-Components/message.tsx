import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface Message {
    messageId: string,
    subject: string,
    isRead: boolean
}

export interface MessageItemProp {
    message: Message;
    onClick: (message: Message) => void
}


const MessageItem = ({ message, onClick }: MessageItemProp) => {

    return (
        <TouchableOpacity onPress={() => onClick(message)} style={styles.container}>
            <View style={styles.body}>
                <Text style={message.isRead ? styles.read : styles.unread}>{message.subject}</Text>
            </View>
        </TouchableOpacity>

    )

}

export default MessageItem;

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        margin: 5
    },
    read: {
        color: '#888', // gri: okundu
        fontWeight: 'normal',
    },
    unread: {
        color: '#000', // siyah: okunmadı
        fontWeight: 'bold',
    },
})