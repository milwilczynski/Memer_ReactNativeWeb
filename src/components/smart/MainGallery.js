import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {Text} from "react-native-web";
import Score from "./Score";
import Card from "react-bootstrap/Card";
import ErrorHandler from './../../modules/errors/ErrorHandler';
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
                    let arrays = [];
                    responseData.forEach(
                        (image) => {
                            arrays.push(image);
                        }
                    )
                    return arrays;
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
                let tags = [];
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
                cards.push(
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
                                        token={props.token}
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
