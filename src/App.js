import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Router} from './Router'
import {Menu} from "./modules/Menu";

class App extends React.Component {
    state = {
    };

    componentDidMount(){
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Menu></Menu>
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
