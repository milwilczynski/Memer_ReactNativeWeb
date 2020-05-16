import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class App extends React.Component {
    state = {
        dimensions: {
            window,
            screen
        }
    };

    componentDidMount(){
    };

    render() {
        const { dimensions } = this.state;
        return (
            <View style={{height: dimensions.window.height, width: dimensions.window.width, backgroundColor: 'rgb(218, 224, 230)'}}>
                <View style={styles.logo}>
                    <Text>Memer</Text>
                </View>
                <View style={styles.mainTop}>
                </View>
                <View style={styles.mainBottom}>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    logo: {
        flex: 0.1,
        backgroundColor: "green",
        justifyContent: 'center',
        textAlign: 'center'
    },
    mainTop:{
        flex: 0.5,
        backgroundColor: 'pink',
    },
    mainBottom:{
        flex: 0.4,
        backgroundColor: 'yellow',
    }

});

export default App;

