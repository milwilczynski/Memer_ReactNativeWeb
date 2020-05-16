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
                <Text style={{color: "orange"}}>Siema</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    logo: {

    },
    mainTop:{

    },
    mainBottom:{

    }


});

export default App;

