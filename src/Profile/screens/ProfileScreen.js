import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


const ProfileScreen = ({ navigation }) => {
    const [click, setClick] = useState(false);
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    return (
        <SafeAreaView style={styles.container}>

            {/* <Image source={logo} style={styles.image} resizeMode='contain' /> */}
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                    autoCapitalize='none' />
            </View>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!", navigation.navigate('HomeScreen'))}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
            <View style={styles.rememberView}>
                <View>
                    <Pressable onPress={() => Alert.alert("Forget Password!")}>
                        <Text style={styles.forgetText}>Forgot Password?</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>


        </SafeAreaView>
    )
}
export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "black"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        fontSize: 16,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 150,
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },

    forgetText: {
        fontSize: 13,
        color: "black",
        paddingTop: 26,

    },
    button: {
        backgroundColor: "violet",
        height: 45,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50,
        paddingTop: 12
    },
    footerText: {
        textAlign: "center",
        paddingTop: 18,
        color: "black",
        fontSize: 16,

    },
    signup: {
        color: "black",
        fontSize: 16
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
})