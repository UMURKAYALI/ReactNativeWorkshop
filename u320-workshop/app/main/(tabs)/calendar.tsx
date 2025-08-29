import { ScrollView, StyleSheet, Text, View } from "react-native";


const Calendar = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text> Calendar Screen</Text>
            </View>
        </ScrollView>
    )
}

export default Calendar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    body: {
        flex: 1, alignItems: 'center', margin: 10, borderRadius: 20
    }
})


