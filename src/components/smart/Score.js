import * as React from 'react';
import {Text, View} from "react-native";
import {TouchableOpacity} from "react-native-web";

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.token,
            name: props.name,
            score: props.score
        }
    }

    setScoreFun = async() => {
        try {
            return await fetch('http://localhost:8080/score?imageName=' + this.state.name, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + this.state.token
                }
            })
                .then((response) => response.headers)
                .then((responseData) => responseData.get('actualScore'))
                .then(responseData => {
                        this.setState({
                            score: responseData
                        })
                    }
                )
        } catch (err) {
            console.log(err);
        }
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.setScoreFun()}>
                    <Text>{this.state.score}</Text>
                </TouchableOpacity>
            </View>
        )
    }


}
export default Score;