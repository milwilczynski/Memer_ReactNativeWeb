import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import {useContext, useState} from "react";
import ImagePicker from "react-native-everywhere-image-picker";
import {UserContext} from "../modules/auth/UserContext";
import FileUtility from "../utilites/FileUtility";
import TextInput from "react-native-web/dist/exports/TextInput";
import Button from "react-bootstrap/Button";
export function AddPicture() {
    const {user} = useContext(UserContext);
    const [uri, setUri] = useState(null);
    const [text, setText] = useState('Pick an image!')
    const [title, setTitle] = useState('title');
    const [filename, setFileName] = useState('test.jpg');
    const [tag1, setTag1] = useState(false);
    const [tag2, setTag2] = useState(false);

    function handleImage(uri) {
        setUri(uri);
        setText('Picture is in cache!');
    };

    function handleFail( error){
        console.log(error);
    };

    async function submit() {
        if(uri !== null) {
            let tags = [];
            if(tag1 === true) {
                tags.push("TAG1");
            }
            if(tag2 === true){
                tags.push("TAG2")
            }
            let formdata = new FormData();
            formdata.append("image", FileUtility.dataURLtoFile(uri.uri, filename), filename);
            formdata.append('imageData', new Blob([JSON.stringify(
                {
                    title: title,
                    name: "",
                    points: "0",
                    tags: tags
                })], {
                type: "application/json"
            }));
            await fetch('http://localhost:8080/uploadFile', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Authorization": "Bearer " + user
                }, body: formdata
            })
                .then(response => console.log(response.status))
                .then(setText('Pick an image!'))
        }
    }
    function checkIfChecked(whichTag){
        if(whichTag === 'tag1'){
            setTag1(!tag1);
        }
        if(whichTag === 'tag2'){
            setTag2(!tag2);
        }
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
            <View style={mainStyles.container}>
                    <View style={mainStyles.formContainer}>
                        <View
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#ffd31d',
                                borderWidth: '3px',
                                borderRadius: "5%",
                                width: '50%',
                                padding: '6%',
                                marginLeft: '25%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <ImagePicker onComplete={handleImage} onFail={handleFail}>
                                <Text style={{fontWeight: 'bold',}}>{text}</Text>
                            </ImagePicker>
                        </View>
                        <Text>Title</Text>
                        <TextInput
                            style={mainStyles.singleForm}
                            onChangeText={(text) => {
                                setTitle(text)
                            }}
                        />
                        <Text>Name (ex. nameOfImage.png)</Text>
                        <TextInput
                            style={mainStyles.singleForm}
                            onChangeText={(text) => {
                                setFileName(text)
                            }}
                        />

                        <Text style={{borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#ffd31d', paddingBottom: '5px'}}>Tags</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <TouchableOpacity style={tag1 ? mainStyles.radioButtonPressed: mainStyles.radioButton }
                                              onPress={() => checkIfChecked('tag1')}>
                                <Text>TAG1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tag2 ? mainStyles.radioButtonPressed : mainStyles.radioButton}
                                              onPress={() => checkIfChecked('tag2')}>
                                <Text>TAG2</Text>
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
                                }} variant="warning">Send Picture!</Button>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const
    mainStyles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: '15%',
            width: '70%',
            minHeight: '100%',
            alignItems: "center",
            justifyContent: "center"
        },
        formContainer: {
            width: '30%',
            flex: 0.5,
            borderRadius: "2%",
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'grey',
            padding: '1%',
            justifyContent: 'space-between',
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