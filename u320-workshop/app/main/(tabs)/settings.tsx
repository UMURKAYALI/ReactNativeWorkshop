import { ScrollView, StyleSheet, Text, View } from "react-native";


const Settings = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text> Settings Screen</Text>
            </View>
        </ScrollView>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    body: {
        flex: 1, alignItems: 'center', margin: 10, borderRadius: 20
    }
})
