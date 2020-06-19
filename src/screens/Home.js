import * as React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import TopGallery from '../components/smart/TopGallery';
import MainGallery from '../components/smart/MainGallery';
import {ScrollView} from "react-native-web";
import {useContext} from "react";
import {UserContext} from "../modules/auth/UserContext";

export function Home(){
    const {user} = useContext(UserContext);
        return (
            <View style={{width: '100%', flex: 1}}>
                <View style={{width: '100%', flex: 1}}>
                    <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
                        <View style={styles.mainTop}>
                            <TopGallery token={user}/>
                        </View>
                        <View style={styles.mainBottom}>
                            <MainGallery token={user}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    mainTop:{
        flex: 1,
        minHeight: '100%',
    },
    mainBottom:{
        flex: 1,
        minHeight: '100%',
    }

});


