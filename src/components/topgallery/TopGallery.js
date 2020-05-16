import * as React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import topStyles from './TopGalleryStyles';

const TopGallery = props =>{
    return(
        <View style={topStyles.container}>
            <View style={topStyles.mainImage}>
                <Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/1.jpg')}/>
            </View>
            <View style={topStyles.restImage}>
                <View style={topStyles.restImageRow}>
                    <View style={topStyles.singleImage}><Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/2.jpg')}/></View>
                    <View style={topStyles.singleImage}><Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/3.jpg')}/></View>
                </View>
                <View style={topStyles.restImageRow}>
                    <View style={topStyles.singleImage}><Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/4.jpg')}/></View>
                    <View style={topStyles.singleImage}><Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/5.jpg')}/></View>
                </View>
            </View>
        </View>
    )
}


export default TopGallery;
