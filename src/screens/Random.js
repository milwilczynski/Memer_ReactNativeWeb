import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../modules/auth/UserContext";
import Score from "../components/smart/Score";

export function Random() {
    const {user} = useContext(UserContext);
    const [post, setPost] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/random', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + user
            }
        })
            .then(res => res.json())
            .then(res => _renderPosts(res))
    }, [user])



    async function _renderPosts(res) {
        try {
            let tags = [];
            res.tags.forEach
            (
                tag => {
                    tags.push(
                        <View key={res.name + tag} style={mainStyles.tag}>
                            <Text style={{}}>
                                {tag}
                            </Text>
                        </View>)
                }
            )
            let card = [];
            card.push(
                <View key={res.name} border="light" style={{
                    minHeight: '100%'
                }}>
                    <View style={mainStyles.top}>
                        <Text>{res.title}</Text>
                    </View>
                    <View style={mainStyles.bottom}>
                        <View style={mainStyles.imageContainer}>
                            <Image resizeMode="stretch"
                                   style={{height: '100%', marginRight: '5px', borderRadius: '1%'}}
                                   source={'http://localhost:8080/upload/static/images/' + res.name}/>
                        </View>
                        <View style={mainStyles.tagsContainer}>
                            {tags}
                        </View>
                        <Score
                            name={res.name}
                            token={user}
                            score={res.points}
                        />
                    </View>
                </View>
            )
            setPost(card);
        } catch (err) {

        }
    }
    return (
        <View style={{height: '50%', width: '80%', justifyContent: 'center', flex: 1}}>
            <View style={{flex: 0.8}}>
                {post}
            </View>
        </View>
    )

}
;

export default Random;

const
    mainStyles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: '15%',
            width: '70%',
            minHeight: '100%',
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
            marginLeft: '1%',
            flexDirection: 'row',
            justifyContent: 'flex-end'
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
