import { Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { useState } from "react";
import Axios from 'axios'
import AddCar from './AddCar';
const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.customButton, buttonStyle]}>
            <Text style={[styles.customButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, Setpassword] = useState('');

    const checkuser = async () => {
        try {
            const response = await Axios.post('http://Ip:3000/login', {
                email: email,
                password: password,
            });
            console.log(response.data);
            if (response.data.success) {
                alert("Something Went Wrong ! , Your Email Or Your Password Are Not Matching !!")
            } else {
                alert(`Welcome ${email} To Our Application`)
                navigation.navigate('AddCar');


            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Text style={styles.mainword}>Login</Text>
            <View>
                <Text style={styles.labelemail}>Email</Text>
                <TextInput
                    style={styles.inputemail}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <Text style={styles.labelpass}>Password</Text>
                <TextInput
                    style={styles.inputpass}
                    value={password}
                    onChangeText={Setpassword}
                    autoCapitalize='none'
                    autoCompleteType='password'
                    secureTextEntry={true}
                />
                <CustomButton
                    title="Log In"
                    onPress={checkuser}
                    buttonStyle={{ marginTop: 30, borderRadius: 5 }}
                    textStyle={{ fontSize: 20 }}
                />
            </View>
            <Pressable
                title="Already have an account?Sign up"
                onPress={() => navigation.navigate('Sign')}
                color="#FFFFFF"
                style={{ textDecorationLine: 'none' }}
            /> 
            <Text style={styles.foot2}>Forgot Your Password ? <Text style={{color: 'white' }}>Click Here !</Text></Text>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainword: {
        marginBottom: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        //fontWeight: 800,
        fontSize: 40,
        lineHeight: 40,
        color: '#FFFFFF',
    },
    facebook: {
        marginTop: 13,
        resizeMode: 'contain',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        position: 'absolute',
        width: 120,
        height: 40,
        left: 30,
        top: 480,
    },
    google: {
        marginTop: 13,
        resizeMode: 'contain',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        position: 'absolute',
        width: 120,
        height: 37,
        left: 250,
        top: 480,
    },
    foot2: {
        marginTop: 35,
    },
    foot1: {
        marginTop: 40,
        paddingTop: 40
    },
    continue: {
        //fontWeight: 400,
        fontSize: 14,
        lineHeight: 20,
        marginTop: 10,
        color: 'white',
    },
    customButton: {
        backgroundColor: '#334155',
        height: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#94A3B8'
    },
    inputpass: {
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    labelpass: {
        marginTop: 20,
        fontFamily: 'Roboto',
        //fontWeight: 400,
        fontSize: 12,
        color: '#FFFFFF',
    },
    labelemail: {
        marginTop: 20,
        fontFamily: 'Roboto',
        //fontWeight: 400,
        fontSize: 12,
        color: '#FFFFFF',
    },
    inputemail: {
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    customButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default LogIn;
