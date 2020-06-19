import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {Text} from "react-native-web";
import Score from "./Score";
import Card from "react-bootstrap/Card";
import ErrorHandler from './../../modules/errors/ErrorHandler';
import CardMaker from "./CardMaker";
export function MainGallery(props) {
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        try {
            fetch('http://localhost:8080/page?page=' + page, {
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
                    }catch (err) {
                    }
                })
                .then(response => _renderMainGallery(response));
        }catch(err){
            console.log(err);
        }
    }, [])

    async function _renderMainGallery(images) {
        try {
            let cards = [];
            images.forEach(imageParam => {
                cards.push(
                   <CardMaker imageParam = {imageParam} token={props.token} />
                );
            });
            setPosts(cards);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={mainStyles.container}>
            {posts}
        </View>
    );

}

export default MainGallery;
const
    mainStyles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: '20%',
            width: '60%',
        },
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
