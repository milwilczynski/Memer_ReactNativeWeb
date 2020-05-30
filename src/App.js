import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Routes} from './Routes'
import {Menu} from "./components/dumb/Menu";
import {history} from './store/history';


class App extends React.Component {
    constructor() {
        super();
        this.state ={
            isLoggedIn: false
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Menu>{history}</Menu>
                </View>
                <Routes></Routes>
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
