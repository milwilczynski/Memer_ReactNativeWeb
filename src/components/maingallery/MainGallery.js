import * as React from 'react';
import {
    View,
    Image,
} from 'react-native';
import mainStyles from './MainGalleryStyles';
import Card from 'react-bootstrap/Card'
/*
 <View style={mainStyles.container}>
                    <View style={mainStyles.top}>
                        <View style={mainStyles.title}>Nazwa obrazka</View>
                    </View>
                    <View style={mainStyles.bottom}>
                        <View style={mainStyles.imageContainer}>
                                <Image style={{height: Image.getSize(), flex: 1}} source={require('./../../resources/temp/2.jpg')}/>
                        </View>
                        <View style={mainStyles.tagsContainer}>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                        </View>
                    </View>
</View>
 */

export default class App extends React.Component {

    render() {
        return (
            <View style={mainStyles.container}>
                <Card border="light" style={{
                    minHeight: '100%', flex: 1 }}>
                    <View style={mainStyles.top}>
                        <Card.Header>Header</Card.Header>
                    </View>
                        <View style={mainStyles.bottom}>
                            <View style={mainStyles.imageContainer}>
                               <Image style={{height: '100%', flex: 1}} source={require('./../../resources/temp/2.jpg')} rounded />
                            </View>
                            <View style={mainStyles.tagsContainer}>
                                <View style={mainStyles.tag}>1</View>
                                <View style={mainStyles.tag}>2</View>
                                <View style={mainStyles.tag}>3</View>
                                <View style={mainStyles.tag}>4</View>
                            </View>
                        </View>
                </Card>
            </View>
        )
    }
}


