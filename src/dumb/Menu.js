import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const Menu = props =>{
    return(
        <View style={menuStyles.menu}>
            <TouchableOpacity style={menuStyles.componentButton}>
                <Text style={{color: 'white',
                    fontFamily: 'DM Mono',
                    fontWeight: 'BOLD',
                    fontStyle: 'italic',
                    fontSize: '24px',
                    transform: 'rotate(-5deg)',
                    backgroundColor: '#ffd31d'}}>Gallery!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Random</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menuStyles.componentButton}>
                <Text style={menuStyles.componentText}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}
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
