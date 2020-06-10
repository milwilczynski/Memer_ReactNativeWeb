import * as React from 'react';
import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {history} from "../../store/history";
import {UserContext} from "../../modules/auth/UserContext";

export function Menu() {
    const {user, setUser} = useContext(UserContext);
    let toRender = [];
    if (user == '') {
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    history.push("/register");
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Register</Text>
            </TouchableOpacity>
        )
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    history.push("/login");
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Log In</Text>
            </TouchableOpacity>
        )
    } else {
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    history.push("/random");
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Random</Text>
            </TouchableOpacity>
        )
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    history.push('/');
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Search</Text>
            </TouchableOpacity>
        )
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    history.push('/');
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Add Picture</Text>
            </TouchableOpacity>
        )
        toRender.push(
            <TouchableOpacity
                onPress={() => {
                    setUser('');
                    history.push('/');
                }}
                style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Log Out</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={menuStyles.menu}>
            <TouchableOpacity
                onPress={() => {
                    history.push("/");
                }}
                style={menuStyles.componentButton}>
                <Text style={{
                    color: 'white',
                    fontFamily: 'DM Mono',
                    fontWeight: 'BOLD',
                    fontStyle: 'italic',
                    fontSize: '24px',
                    transform: 'rotate(-5deg)',
                    backgroundColor: '#ffd31d'
                }}>Gallery!</Text>
            </TouchableOpacity>
            {toRender}
        </View>
    )
};

const menuStyles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: '#2d2d2d',
        justifyContent: 'center',
    },
    componentButton: {
        flex: 0.1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    componentText: {
        color: 'white',
        fontFamily: 'Kanit',
        fontWeight: '400',
        fontStyle: 'italic'
    }
});


export default Menu;