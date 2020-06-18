import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, View,} from 'react-native';
import {Text} from "react-native-web";
import Score from "./Score";

export function MainGallery(props) {
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/page?page=' + page, {
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
            .then(response => _renderMainGallery(response));
    }, [])

    async function _renderMainGallery(images) {
        try {
            let cards = [];
            images.forEach(imageParam => {
                let tags = [];
                imageParam.tags.forEach(tag => {
                    tags.push(<View key={imageParam.name + tag} style={mainStyles.tag}><Text
                        style={{}}>{tag}</Text></View>)
                })
                cards.push(
                    <View key={imageParam.name} border="light" style={{
                        minHeight: '60%', marginTop: '3%'
                    }}>
                        <View style={mainStyles.top}>
                            <Text>{imageParam.title}</Text>
                        </View>
                        <View style={mainStyles.bottom}>
                            <View style={mainStyles.imageContainer}>
                                <Image resizeMode="stretch"
                                       style={{height: '100%', marginRight: '5px', borderRadius: '1%'}}
                                       source={'http://localhost:8080/upload/static/images/' + imageParam.name}/>
                            </View>
                                <Score
                                    name={imageParam.name}
                                    token={props.token}
                                    score={imageParam.points}
                                />
                                <View style={mainStyles.tagsContainer}>
                                    {tags}
                                </View>
                        </View>
                    </View>
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
            minHeight: '100%'
        },
        titleContainer: {
            flex: 1,
        },
        top: {
            flex: 0.05,
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: '#ffd31d',
            marginBottom: '0.5%'
        },
        bottom: {
            flex: 1,
            flexDirection: 'row',
            width: '90%',
            marginLeft: '5%'
        },
        imageContainer: {
            flex: 1,
            minHeight: '100%',
            marginRight: '0.2%',
        },
        tagsContainer: {
            flex: 0.3,
            flexDirection: 'row',
            alignItems: 'flex-end',
        },
        tag: {
            flex: 0.25,
            height: '5%',
            margin: '0.8%',
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
            borderBottomColor: '#ffd31d',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
