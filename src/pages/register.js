import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}  placeholder='Nome' placeholderTextColor={"#B8D433"}/>

            <TextInput style={styles.input}  placeholder='Telefone' placeholderTextColor={"#B8D433"}/>

            <TextInput style={styles.input} placeholder='CPF' placeholderTextColor={"#B8D433"}/>

            <TextInput style={styles.input} secureTextEntry={true} placeholder='E-mail' placeholderTextColor={"#B8D433"}/>

            <TextInput style={styles.input} placeholder='Curso' placeholderTextColor={"#B8D433"}/>

            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('login');
              }}>
                <Text style={styles.buttonText}>SALVAR</Text>
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
        marginTop: 10
    },
    buttonText:{
        color: '#212121',
        fontWeight: 'bold',
    },
});

export default Register;