import { ScrollView, StyleSheet, Text, View } from "react-native";


const Contacts = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text> Contacts Screen</Text>
            </View>
        </ScrollView>
    )
}

export default Contacts;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    body: {
        flex: 1, alignItems: 'center', margin: 10, borderRadius: 20
    }
})


