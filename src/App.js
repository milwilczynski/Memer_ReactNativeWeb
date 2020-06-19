import * as React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {Routes} from './Routes'

export function App() {
    return (
        <View style={styles.container}>
            <Routes></Routes>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});
export default App;
