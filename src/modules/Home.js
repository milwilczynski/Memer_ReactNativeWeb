import * as React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import TopGallery from '../components/topgallery/TopGallery';
import MainGallery from './../components/maingallery/MainGallery';
import {ScrollView} from "react-native-web";
import {observer} from "mobx-react-lite";
interface Props{

}

export const Home: React.FC<Props> = observer((props) => {
  
        return (
            <View style={{width: '100%', flex: 1}}>
                <View style={{width: '100%', flex: 1}}>
                    <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
                        <View style={styles.mainTop}>
                            <TopGallery>{props}</TopGallery>
                        </View>
                        <View style={styles.mainBottom}>
                            <MainGallery/>
                            <MainGallery/>
                            <MainGallery/>
                            <MainGallery/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );

});
const styles = StyleSheet.create({
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


