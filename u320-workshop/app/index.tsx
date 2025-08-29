import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginPage = () => {

    // Array Destructuring
    const [username, setUsername] = useState('');  // Hooks: UseState
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);

    // Without Array Destructuring
    const isLoginState = useState('false');
    const isLogin = isLoginState[0];
    const setIsLogin = isLoginState[1];

    // Hooks: UseEffects

    useEffect(() => {
        console.log('Login Page Initialized!')
    }, []);

    useEffect(() => {
        console.log('Username updated!')
    }, [username]);

    // Hooks: UseRef
    const usernameRef = useRef<TextInput>(null);

    // Hooks: UseCallback (to cache method)
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    // Creating Method
    const loginButtonPressed = () => {
        console.log('Touchable Custom Button Pressed');
        //usernameRef.current?.focus();
        router.push('/main')
    }

    return (
        <ScrollView style={styles.mainContainer}>

            <View style={styles.container}>
                <Image source={require('../assets/images/safir_logo_3.png')} style={styles.logo} />
                <Text style={styles.title}>Oturum Aç</Text>
            </View>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Kullanıcı Adı" value={username} onChangeText={(username: string) => setUsername(username)} ref={usernameRef}></TextInput>
                <TextInput style={styles.input} placeholder="Parola" secureTextEntry={true} value={password} onChangeText={(password: string) => setPassword(password)}></TextInput>

                <TouchableOpacity style={styles.touchableButton} onPress={loginButtonPressed}>
                    <View>
                        <Text style={styles.buttonText}>Giriş Yap</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <Button title="Giriş Yap" color={'green'} onPress={() => { console.log('Login button pressed') }}></Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff7e'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 500,
    },
    logo: {
        marginTop: 30,
        resizeMode: "contain",
        width: 300,
        height: 250,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginTop: 8,
        borderRadius: 5,
        width: '90%'
    },
    touchableButton: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: 'rgb(40,47,61)',
        width: '90%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});


export default LoginPage;  