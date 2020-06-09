import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Store} from "../../modules/auth/Store";

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            posts: null,
            token: null
        }
    }

    render() {
        return (
            <View style={{height: '100%', width: '100%', flex: 1}}>
            </View>
        )
    }
};

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
