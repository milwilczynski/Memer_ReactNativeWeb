import * as React from 'react';
import {
    View,
    Image, StyleSheet,
} from 'react-native';
import {Text} from "react-native-web";
import {Store} from "../../modules/auth/Store";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            page: 1,
            lastPageIndex: 0,
            posts: []
        }

    }

    async componentDidMount() {
        await this.checkLastPageOnServer();
        this.setState({
            posts: await this.renderPosts()
        })
    }


    checkLastPageOnServer = async () => {
        try {
           return await fetch('http://localhost:8080/numberLastPage', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + await Store._retrieveData()
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({
                        lastPageIndex: responseData
                    })
                });
        } catch (err) {
            console.log(err);
        }
    }

    submit = async () => {
        try {
          return await fetch('http://localhost:8080/page?page=' + this.state.page, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + await Store._retrieveData()
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
                });
        } catch (err) {
            console.log(err);
        }
    }

    renderPosts = async () =>{
        let images = await this.submit();
        try {
            let cards = [];
            let index = 0;
            images.forEach(imageParam => {
                ++index;
                cards.push(
                    <View key={index} border="light" style={{
                        minHeight:'100%'
                    }}>
                        <View style={mainStyles.top}>
                            <Text>{imageParam.title}</Text>
                        </View>
                        <View style={mainStyles.bottom}>
                            <View style={mainStyles.imageContainer}>
                                <Image resizeMode="stretch" style={{ height: '100%', marginRight: '5px', borderRadius: '1%'}}
                                       source={'http://localhost:8080/upload/static/images/' + imageParam.name}/>
                            </View>
                            <View style={mainStyles.tagsContainer}>
                                <View style={mainStyles.tag}><Text style={{}}>Funny</Text></View>
                                <View style={mainStyles.tag}><Text>Historical</Text></View>
                                <View style={mainStyles.tag}><Text>Mango</Text></View>
                                <View style={mainStyles.tag}><Text>Animo</Text></View>
                            </View>
                        </View>
                    </View>
                );
            });
            return cards;
        }catch(err){
            console.log(err);
        }
    }

    render() {
        console.log(this.state.posts);
        return (
            <View style={mainStyles.container}>
                {this.state.posts}
            </View>
        );
    }
}


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
