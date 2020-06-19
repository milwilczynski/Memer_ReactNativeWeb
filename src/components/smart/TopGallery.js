import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";

import ErrorHandler from "../../modules/errors/ErrorHandler";
import CardMaker from "./CardMaker";

export function TopGallery(props) {
    const token = props.token;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:8080/page', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(ErrorHandler._ErrorHandler)
                .then((response) => response.json())
                .then((responseData) => {
                    try {
                        let arrays = [];
                        responseData.forEach(
                            (image) => {
                                arrays.push(image);
                            }
                        )
                        return arrays;
                    } catch (err) {

                    }
                })
                .then(response => _renderTopGallery(response));
        } catch (err) {

        }
    }, [])

    async function _renderTopGallery(images) {
        try {
            let cards = [];
            images.forEach(imageParam => {
                cards.push(
                    <CardMaker imageParam={imageParam} from={"topGallery"} token={token}/>
                );
            });
            setPosts(cards);
        } catch (err) {
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
        marginTop: '2.5px',
        flexDirection: 'row',
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
        position: 'absolute'
    },
});
