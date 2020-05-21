import * as React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import Store  from './../auth/Store';
import Button from "react-bootstrap/Button";
import TextInput from "react-native-web/dist/exports/TextInput";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    submit() {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName:  this.state.login,
                userPassword: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                Store._storeData(responseData);
            })

    }


    render() {
        return (
            <View style={styles.formContainer}>
                <Text>Username</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        this.setState({login: text})
                    }}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        this.setState({password: text})
                    }}
                />
                <TouchableOpacity  onPress={()=>this.submit()}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: '#ffd31d',
                            fontWeight: 'bold',
                            width: '50%',
                            marginLeft:'25%'
                        }} variant="warning">Login</Button>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    formContainer:{
        width: '30%',
        flex: 0.5,
        borderRadius: "2%",
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'grey',
        padding: '1%',
        justifyContent: 'space-between'
    },
    singleForm:{
        flex: 0.2,
        borderRadius: '2%',
        borderColor: '#ffd31d',
        borderStyle: 'solid',
        borderWidth: '1px',

    }
});
export default LoginComponent;
