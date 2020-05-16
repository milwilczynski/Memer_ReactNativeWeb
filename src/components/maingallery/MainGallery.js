import * as React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import mainStyles from './MainGalleryStyles';
import topStyles from "../topgallery/TopGalleryStyles";
import {ImageBackground} from "react-native-web";

export default class App extends React.Component {

    render() {
        let render = true;
        let container = [];
        if (render === false) {
            container.push(<TouchableOpacity>
                <Text >
                </Text>
            </TouchableOpacity>);
        } else {
            container.push(
                <View>
                    <View style={mainStyles.top}>
                        <View style={mainStyles.title}>Nazwa obrazka</View>
                    </View>
                    <View style={mainStyles.bottom}>
                        <View style={mainStyles.imageContainer}>
                            <View style={topStyles.singleImage}><Image style={{height: '200%', width: '100%'}} source={require('./../../resources/temp/2.jpg')}/></View>
                        </View>
                        <View style={mainStyles.tagsContainer}>
                            <View style={mainStyles.tag}>1</View>
                            <View style={mainStyles.tag}>2</View>
                            <View style={mainStyles.tag}>3</View>
                            <View style={mainStyles.tag}>4</View>
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <View style={mainStyles.container}>
                    <View style={mainStyles.top}>
                        <View style={mainStyles.title}>Nazwa obrazka</View>
                    </View>
                    <View style={mainStyles.bottom}>
                        <View style={mainStyles.imageContainer}>
                            <View style={topStyles.singleImage}>
                                <Image style={{height: Image.getSize(), flex: 1}} source={require('./../../resources/temp/2.jpg')}/>
                            </View>
                        </View>
                        <View style={mainStyles.tagsContainer}>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                            <View style={mainStyles.tag}></View>
                        </View>
                    </View>
            </View>
        )
    }
}


