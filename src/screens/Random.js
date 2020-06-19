import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserContext} from "../modules/auth/UserContext";
import Score from "../components/smart/Score";
import ErrorHandler from "../modules/errors/ErrorHandler";
import Card from "react-bootstrap/Card";
import CardMaker from "../components/smart/CardMaker";

export function Random() {
    const {user} = useContext(UserContext);
    const [post, setPost] = useState([]);


    useEffect(() => {
        try {
            fetch('http://localhost:8080/random', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + user
                }
            })
                .then(ErrorHandler._ErrorHandler)
                .then(res => res.json())
                .then(res => _renderPosts(res))
        } catch (err) {

        }
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
                <CardMaker imageParam={res} token={user}/>
            )
            setPost(card);
        } catch (err) {

        }
    }

    return (
        <View style={{height: '50%', width: '50%', justifyContent: 'center', flex: 1}}>
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
