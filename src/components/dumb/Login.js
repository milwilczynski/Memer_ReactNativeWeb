import * as React from 'react';
import { View, Text } from 'react-native';
import {observer} from "mobx-react-lite";
import LoginComponent from "../smart/LoginComponent";

interface Props{

}

export const Login: React.FC<Props> = observer(() =>{

        return (
            <View style={{
                width: '100%',
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
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
                <LoginComponent></LoginComponent>
            </View>
        )
});

