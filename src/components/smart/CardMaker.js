import * as React from 'react';
import {Score} from "./Score";
import {Text, View} from "react-native";
import Card from "react-bootstrap/Card";
export function CardMaker(props) {
    const token = props.token;
    const imageParam = props.imageParam;
    let tags = [];
    if(props.tags != null){
        tags = props.tags;
    }


    return (
        <Card key={imageParam.name} style={{
            marginTop: '2%',
            width: '100%',
            height: '80%',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#ffd31d',
            padding: "0 10px 20px 10px",
        }}>
            <Card.Body style={{borderRadius: '5%'}}>
                <View
                    style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text style={{fontSize: '110%', color: 'grey'}}>
                        {imageParam.title}
                    </Text>
                </View>
                <Card.Img
                    style={{width: '100%', height: "95%", borderRadius: '1%'}}
                    src={
                        'http://localhost:8080/upload/static/images/' + imageParam.name
                    }/>
                <View style={{flexDirection: 'row', flex: 1, height: '5%'}}>
                    <View style={{flexDirection: 'row', flex: 1, marginTop: '5px', marginBottom: '5px'}}>
                        {tags}
                    </View>
                    <View style={{flexGrow: 'flex-end'}}>
                        <Score
                            name={imageParam.name}
                            token={token}
                            score={imageParam.points}
                        />
                    </View>
                </View>
            </Card.Body>
        </Card>
    )


}

export default CardMaker;