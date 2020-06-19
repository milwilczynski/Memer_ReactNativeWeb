import * as React from 'react';
import {useState} from 'react';
import {Text, View} from "react-native";
import {TouchableOpacity} from "react-native-web";
import Icon from '@material-ui/core/Icon';
import ErrorHandler from "../../modules/errors/ErrorHandler";
export function Score(props) {
    const token = props.token;
    const name = props.name;
    const [score, setScore] = useState(props.score);

    function setScoreFun() {
        if (token !== '') {
            try {
                fetch('http://localhost:8080/score?imageName=' + name, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + token
                    }
                })
                    .then(ErrorHandler._ErrorHandler)
                    .then((response) => response.headers)
                    .then((responseData) => responseData.get('actualScore'))
                    .then(responseData => {
                            setScore(responseData);
                        }
                    )
            } catch (err) {
                console.log(err);
            }
        }
    }


    return (
        <View style={{marginTop: '5px'}}>
            <TouchableOpacity  style={{flexDirection: 'row'}} onPress={() => setScoreFun()}>
                <Icon>favorite_border</Icon>
                <Text style={{fontSize: '110%', color: 'grey'}}>{score}</Text>
            </TouchableOpacity>
        </View>
    )


}

export default Score;