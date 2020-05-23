import * as React from 'react';
import {
    View,
    Image,
} from 'react-native';
import mainStyles from './Styles';
import Card from 'react-bootstrap/Card'
import {Text} from "react-native-web";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("MainGallery");
    }

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
                            <View style={mainStyles.tag}><Text>2</Text></View>
                            <View style={mainStyles.tag}><Text>2</Text></View>
                            <View style={mainStyles.tag}><Text>2</Text></View>
                            <View style={mainStyles.tag}><Text>2</Text></View>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}


