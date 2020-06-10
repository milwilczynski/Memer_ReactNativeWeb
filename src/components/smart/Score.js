import * as React from 'react';
import {useState} from 'react';
import {Text, View} from "react-native";
import {TouchableOpacity} from "react-native-web";

export function Score(props) {
    const token = props.token;
    const name = props.name;
    const [score, setScore] = useState(props.score);

    function setScoreFun() {
        if (token != '') {
            try {
                fetch('http://localhost:8080/score?imageName=' + name, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + token
                    }
                })
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
        <View>
            <TouchableOpacity onPress={() => setScoreFun()}>
                <Text>{score}</Text>
            </TouchableOpacity>
        </View>
    )


}

export default Score;