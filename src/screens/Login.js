import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useContext, useState} from "react";
import {UserContext} from "../modules/auth/UserContext";
import {history} from "../store/history";
import TextInput from "react-native-web/dist/exports/TextInput";
import Button from "react-bootstrap/Button";
import ErrorHandler from "../modules/errors/ErrorHandler";

export function Login() {
    const {setUser} = useContext(UserContext);
    const [login, setLogin] = useState('urkek');
    const [password, setPassword] = useState('urkek123');

    async function submit() {
        try {
            await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: login,
                    userPassword: password
                })
            })
                .then(ErrorHandler._ErrorHandler)
                .then((response) => response.json())
                .then((responseData) => {
                    setUser(responseData.token);
                    history.push('/');
                })
        }catch(err){

        }
    }

    return (
        <View style={{
            width: '100%',
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text style={{
                color: 'white',
                fontFamily: 'DM Mono',
                fontWeight: 'BOLD',
                fontStyle: 'italic',
                fontSize: '65px',
                transform: 'rotate(-5deg)',
                marginBottom: '2%',
                backgroundColor: '#ffd31d'
            }}
            >
                Gallery!
            </Text>
            <View style={styles.formContainer}>
                <Text>Username</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setLogin(text)
                    }}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.singleForm}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                />
                <TouchableOpacity onPress={() => submit()}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: '#ffd31d',
                            fontWeight: 'bold',
                            width: '50%',
                            marginLeft: '25%'
                        }} variant="warning">Login</Button>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    formContainer: {
        width: '30%',
        flex: 0.5,
        borderRadius: "2%",
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'grey',
        padding: '1%',
        justifyContent: 'space-between'
    },
    singleForm: {
        flex: 0.2,
        borderRadius: '2%',
        borderColor: '#ffd31d',
        borderStyle: 'solid',
        borderWidth: '1px',

    }
});