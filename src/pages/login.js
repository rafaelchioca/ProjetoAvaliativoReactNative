import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === '' && password === ''){
            navigation.navigate('main');
        } else {
            alert('E-mail ou senha incorretos!')
        }
    }

    return (
        <View style={styles.container}>

            <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor={"#B8D433"} color={"#B8D433"} value={email} onChangeText={setEmail}/>
            
            <TextInput style={styles.input} secureTextEntry={true} placeholder='Senha' placeholderTextColor={"#B8D433"} color={"#B8D433"} value={password} onChangeText={setPassword}/>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonRegister} onPress={() => {
                navigation.navigate('register');
              }}>
                <Text style={styles.buttonTextLogin}>Cadastrar usuário</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121',
    },
    input:{
        borderWidth: 1,
        borderColor: '#B8D433',
        borderRadius: 5,
        padding: 10,
        marginVertical:10,
        width: '80%',
    },
    button:{
        backgroundColor: '#B8D433',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText:{
        color: '#212121',
        fontWeight: 'bold',
    },
    buttonRegister:{
        paddingTop: 10,
        alignItems: "flex-end",
        width: '80%',
    },
    buttonTextLogin:{
        color: '#B8D433',
        fontWeight: 'bold',
    },
});

export default Login;