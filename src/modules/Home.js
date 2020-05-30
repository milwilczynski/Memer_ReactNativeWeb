import * as React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import TopGallery from '../components/smart/TopGallery';
import MainGallery from '../components/smart/MainGallery';
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
                        </View>
                    </ScrollView>
                </View>
            </View>
        );

});
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


