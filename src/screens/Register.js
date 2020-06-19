import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from "react";
import TextInput from "react-native-web/dist/exports/TextInput";
import Button from "react-bootstrap/Button";
import ErrorHandler from "../modules/errors/ErrorHandler";
import {history} from "../store/history";
export function Register() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');


    async function submit() {
        try {
            fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: login,
                    userPassword: password,
                    email: email,
                })
            }).then(ErrorHandler._ErrorHandler)
            .then(history.push('/login'));
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
                <Text>Email</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                />
                <Text>Username</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setLogin(text);
                    }}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                />
                <Text>Re-Password</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setRePassword(text);
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
                        }} variant="warning">Register</Button>
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

