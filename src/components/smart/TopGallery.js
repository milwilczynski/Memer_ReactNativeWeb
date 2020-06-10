import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import {StyleSheet, Text, View} from "react-native";
import Score from './Score';

export function TopGallery(props) {
    const token = props.token;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/page', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                let arrays = [];
                responseData.forEach(
                    (image) => {
                        arrays.push(image);
                    }
                )
                return arrays;
            })
            .then(response => _renderTopGallery(response));
    }, [])

    async function _renderTopGallery(images) {
        try {
            let cards = [];
            images.forEach(imageParam => {
                cards.push(
                    <Card style={{
                        width: '100%',
                        height: '100%',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderColor: '#ffd31d'
                    }}>
                        <Card.Body style={{borderRadius: '5%'}}>
                            <Card.Img
                                style={{width: '100%', height: "95%", borderRadius: '1%'}}
                                variant="bottom"
                                src={
                                    'http://localhost:8080/upload/static/images/' + imageParam.name
                                }/>
                            <View style={{flexDirection: 'row'}}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: '1%',
                                    }}>
                                    <Text style={{fontSize: '110%', color: 'grey'}}>
                                        {imageParam.title}
                                    </Text>
                                </View>
                                <View>
                                    <Score
                                        name={imageParam.name}
                                        token={token}
                                        score={imageParam.points}
                                    />
                                </View>
                            </View>
                        </Card.Body>
                    </Card>
                );
            });
            setPosts(cards);
        } catch (err) {
            //
        }
    }

    return (
        <View style={topStyles.container}>
            <View style={topStyles.mainImage}>{posts[0]}</View>
            <View style={topStyles.restImage}>
                <View style={topStyles.restImageRow}>
                    <View style={topStyles.singleImage}>{posts[1]}</View>
                    <View style={topStyles.singleImage}>{posts[2]}</View>
                </View>
                <View style={topStyles.restImageRow}>
                    <View style={topStyles.singleImage}>{posts[3]}</View>
                    <View style={topStyles.singleImage}>{posts[4]}</View>
                </View>
            </View>
        </View>
    );
};

export default TopGallery;
const topStyles = StyleSheet.create({
    container: {
        marginLeft: '2.5%',
        width: '95%',
        flex: 0.95,
        marginTop: '1.25%',
        height: '100%',
        flexDirection: 'row',
    },
    mainImage: {
        flex: 0.4,
        marginRight: '0.25%',
        zIndex: 2
    },
    restImage: {
        flex: 0.6,
    },
    restImageRow: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 2
    },
    singleImage: {
        flex: 0.5,
        margin: '0.15%',
        zIndex: 2
    },
    splitter: {
        height: '30%',
        width: '100%',
        backgroundColor: '#ffd31d',
        marginTop: '32%',
        zIndex: 1,
        position: 'absolute'
    },
});
