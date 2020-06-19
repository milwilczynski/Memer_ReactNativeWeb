import * as React from 'react';
import {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Button from "react-bootstrap/Button";
import {ScrollView} from "react-native-web";
import {UserContext} from "../modules/auth/UserContext";
import Score from "../components/smart/Score";
import ErrorHandler from "../modules/errors/ErrorHandler";
import Card from "react-bootstrap/Card";

export function Search() {
    const {user} = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [chosen, setChosen] = useState(true);

    function submit() {
        try {
            let para = '';
            if (chosen === true) {
                para = 'findByTag?tagEnum=' + inputValue;
            }
            if (chosen === false) {
                para = 'getByTitle?title=' + inputValue;
            }
            fetch('http://localhost:8080/' + para, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then(ErrorHandler._ErrorHandler)
                .then(res => res.json())
                .then((responseData) => {
                    try {
                        let arrays = [];
                        responseData.forEach(
                            (image) => {
                                arrays.push(image);
                            }
                        )
                        return arrays;
                    }catch(err){
                    }
                })
                .then(res => renderSearchedPosts(res))
        }catch(err){

        }
    }

    function changeInputValue(byWhat) {
        if (byWhat === 'findByTag') {
            setChosen(true);
        } else {
            setChosen(false)
        }
    }

    async function renderSearchedPosts(images) {
        try {
            let cards = [];
            images.forEach(imageParam => {
                cards.push(
                    <Card key={imageParam.name} style={{
                        width: '100%',
                        height: '80%',
                        borderStyle: 'solid',
                        borderWidth: '1px',
                        borderColor: '#ffd31d',
                        marginTop: '5%',
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
                                <View style={{flexGrow: 'flex-end'}}>
                                    <Score
                                        name={imageParam.name}
                                        token={user}
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
        <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
            <View style={styles.formContainer}>
                <Text>Search a picture!</Text>
                <TextInput
                    style={styles.singleForm}
                    onChangeText={(text) => {
                        setInputValue(text);
                    }}
                />
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={chosen ? styles.radioButtonPressed : styles.radioButton}
                                      onPress={() => changeInputValue('findByTag')}>
                        <Text>by Tag</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={chosen ? styles.radioButton : styles.radioButtonPressed}
                                      onPress={() => changeInputValue('findByTitle')}>
                        <Text>by Title</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => submit()}>
                    <Button
                        style={{
                            color: 'white',
                            backgroundColor: '#ffd31d',
                            fontWeight: 'bold',
                            width: '50%',
                            marginLeft: '25%'
                        }} variant="warning">Search!</Button>
                </TouchableOpacity>
            </View>

                <View style={styles.mainBottom}>
                    <ScrollView contentContainerStyle={{flexGrow: 0.8, flex: 0.5, width: "50%"}}>
                    {posts}
                    </ScrollView>
                </View>

        </View>

    );
}
export default Search;
const styles = StyleSheet.create({
    mainBottom: {
        flex: 0.8,
        minHeight: '50%',
        width: '100%',
        marginLeft: '25%'
    },
    formContainer: {
        width: '30%',
        marginLeft: '35%',
        flex: 0.2,
        borderRadius: "2%",
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'grey',
        padding: '1%',
        justifyContent: 'space-between'
    },
    singleForm: {
        flex: 0.2,
        borderRadius: '2%',
        borderColor: '#ffd31d',
        borderStyle: 'solid',
        borderWidth: '1px',

    },
    radioButtonPressed: {
        marginRight: '2%',
        borderBottomWidth: '1px',
        borderBottom: 'solid'
    },
    radioButton: {
        marginRight: '2%',
    }
});

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
            marginBottom: '2%'
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