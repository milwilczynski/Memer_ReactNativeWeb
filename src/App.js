import * as React from 'react';
import Store from './modules/auth/Store';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Router} from './Router'
import {Menu} from "./modules/dumb/Menu";

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            isLoggedIn: false
        }
    }

    componentDidMount(){
        /*
        var data = Store._retrieveData();
        console.log(data);
        if(data){
            this.setState = {
                isLoggedIn: true
            }
        }else{
            this.setState = {
                isLoggedIn: false
            }
        }
         */
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Menu>{this.state.isLoggedIn}</Menu>
                </View>
                <Router></Router>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    menu: {
        position: 'flex',
        width: '100%',
        zIndex: 1,
        backgroundColor: "green",
        justifyContent: 'center',
        textAlign: 'center'
    },
});
export default App;
