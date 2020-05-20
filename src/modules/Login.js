import * as React from 'react';
import { View, Text } from 'react-native';
import {observer} from "mobx-react-lite";

interface Props{

}

export const Login: React.FC<Props> = observer(() =>{
    return(
        <View style={{width: '100%', flex: 1}}>
            <Text>Login Page</Text>
        </View>
    )
});

