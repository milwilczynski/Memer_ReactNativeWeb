import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Menu from './dumb/Menu';
import TopGallery from "./components/topgallery/TopGallery";
import MainGallery from "./components/maingallery/MainGallery";
import { ScrollView } from "react-native";

class App extends React.Component {
    state = {
    };

    componentDidMount(){
    };

    render() {
        return (
            <View style={{width: '100%', flex: 1}}>
                <View style={styles.menu}>
                    <Menu/>
                </View>
                <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
                <View style={styles.mainTop}>
                    <TopGallery/>
                </View>
                <View style={styles.mainBottom}>
                    <MainGallery/>
                    <MainGallery/>
                    <MainGallery/>
                    <MainGallery/>
                </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    menu: {
        position: 'flex',
        width: '100%',
        zIndex: 1,
        backgroundColor: "green",
        justifyContent: 'center',
        textAlign: 'center'
    },
    mainTop:{
        flex: 5,
        minHeight: '100%',
        backgroundColor: '#f0f0f0'
    },
    mainBottom:{
        flex: 6,
        minHeight: '60%'
    }

});

export default App;

