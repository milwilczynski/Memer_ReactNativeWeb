import * as React from 'react';
import {Text, View} from 'react-native';


export function ErrorNoPageFound(props) {
    const state = props.location.state;
    return (
        <View style={{width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: "16.5%"}}>
                <Text style={{
                    color: 'white',
                    fontFamily: 'DM Mono',
                    fontWeight: 'BOLD',
                    fontStyle: 'italic',
                    fontSize: '65px',
                    transform: 'rotate(-5deg)',
                    marginBottom: '2%',
                    backgroundColor: '#ffd31d'
                }}
                >
                    Gallery!
                </Text>
            </View>
            <View style={{}}>
                <Text style={{
                    fontFamily: 'DM Mono',
                    fontWeight: 'BOLD',
                    fontStyle: 'italic',
                    fontSize: '65px',
                    marginBottom: '2%',
                }}
                >
                    ERROR: {state.error}
                </Text>
            </View>
        </View>
    );
};
export default ErrorNoPageFound;