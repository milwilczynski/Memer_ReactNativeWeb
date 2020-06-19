import * as React from 'react';
import {Score} from "./Score";
import {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import Card from "react-bootstrap/Card";
export function CardMaker(props) {
    const token = props.token;
    const imageParam = props.imageParam;
    const [tags, setTags] = useState([]);

    if(props.from !== 'topGallery' &&    props.from !== 'search') {
        if (imageParam.tags != null) {
            imageParam.tags.forEach(tag => {
                tags.push(
                    <View key={imageParam.name + tag} style={mainStyles.tag}>
                        <Text
                            style={{}}>
                            {tag}
                        </Text>
                    </View>
                )
            })
        }
    }
    return (
        <Card key={imageParam.name} style={{
            marginTop: '2%',
            flex: 1,
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

const
    mainStyles = StyleSheet.create({
        tagsContainer: {
            flex: 1,
            flexDirection: 'row',
        },
        tag: {
            flex: 0.05,
            height: '100%',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: '#ffd31d',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });