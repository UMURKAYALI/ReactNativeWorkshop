import { ScrollView, StyleSheet, Text, View } from "react-native";


const Messages = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text> Messages Screen</Text>
            </View>
        </ScrollView>
    )
}

export default Messages;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    body: {
        flex: 1, alignItems: 'center', margin: 10, borderRadius: 20
    }
})

