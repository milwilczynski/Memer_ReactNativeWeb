import * as React from 'react';
import {Store} from "../../modules/auth/Store";
import Card from "react-bootstrap/Card";
import {StyleSheet, Text, View} from "react-native";
import Zoom from "react-medium-image-zoom";

class TopGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

    }

    componentDidMount() {
        console.log("TopGalleryComp");
        this.submit()
    }

    submit() {
        fetch('http://localhost:8080/page', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + Store._retrieveData()
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
                this.setState({
                    images: arrays
                })
            });
    }

    render() {
        let cards = [];
        this.state.images.forEach(imageParam => {
            let url = 'http://localhost:8080/upload/static/images/' + imageParam.name;
            cards.push(
                <Card style={{
                    width: '100%',
                    height: '100%',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#ffd31d'
                }}>
                    <Card.Body>
                        <Card.Img
                            style={{width: '100%', height: "95%", borderRadius: '1%'}}
                            variant="bottom"
                            src={
                                'http://localhost:8080/upload/static/images/' + imageParam.name
                            }/>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '1%',
                            }}>
                            <Text style={{fontSize: '110%', color: 'grey'}}>
                                {imageParam.title}
                            </Text>

                        </View>
                    </Card.Body>
                </Card>
            );
        });
        return (
            <View style={topStyles.container}>
                <View style={topStyles.mainImage}>{cards[0]}</View>
                <View style={topStyles.restImage}>
                    <View style={topStyles.restImageRow}>
                        <View style={topStyles.singleImage}>{cards[1]}</View>
                        <View style={topStyles.singleImage}>{cards[2]}</View>
                    </View>
                    <View style={topStyles.restImageRow}>
                        <View style={topStyles.singleImage}>{cards[3]}</View>
                        <View style={topStyles.singleImage}>{cards[4]}</View>
                    </View>
                </View>
            </View>
        );
    }
};

export default TopGallery;
const topStyles = StyleSheet.create({
    container:{
        marginLeft: '2.5%',
        width: '95%',
        flex: 0.95,
        marginTop: '1.25%',
        height: '100%',
        flexDirection: 'row',
    },
    mainImage:{
        flex: 0.4,
        marginRight: '0.25%',
        zIndex:2
    },
    restImage:{
        flex: 0.6,
    },
    restImageRow:{
        flex: 1,
        flexDirection: 'row',
        zIndex:2
    },
    singleImage:{
        flex: 0.5,
        margin: '0.15%',
        zIndex:2
    },
    splitter:{
        height: '30%',
        width: '100%',
        backgroundColor: '#ffd31d',
        marginTop: '32%',
        zIndex: 1,
        position: 'absolute'
    },
});
