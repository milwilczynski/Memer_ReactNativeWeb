import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import topStyles from './TopGalleryStyles';
import Card from "react-bootstrap/Card";
//<Image style={{height: '100%', width: '100%'}} source={require('./../../resources/temp/1.jpg')}/>
/*

                <Card style={{ width: '100%', height:'100%'}}>
                    <Image style={{height: '90%', width: '95%', marginTop: '2.5%', marginLeft: '2.5%'}} source={require('./../../resources/temp/1.jpg')}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
 */
const TopGallery = props =>{
    let card =
    (
            <Card style={{ width: '100%', height:'100%'}} className="text-white ">
                <Card.Img style={{height: '85%', width: '98%', margin: '1%'}} src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/07/8d9c9babe721852b37ea146a8c37157a.jpg" alt="Card image" />
                <Card.ImgOverlay style={{height: '100%', width: '100%',}}>
                        <View style={{width: '100%', height: '30px', backgroundColor: '#black', opacity: '60%', borderRadius: '2%'}}>
                            <Text style={{color: 'white', fontSize: '24px'}}>Obrazek pienkny jak obrazka</Text>
                        </View>
                        <View style={{width: '100%', height: '0.2%', marginTop: '1%', backgroundColor: '#ffd31d',}}></View>
                </Card.ImgOverlay>
                <View style={{flex: 1, flexDirection: 'row',}}>
                    <View style={{marginLeft: '1%', flex: 0.1, borderRadius: '8%', height: '20%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffd31d', }}>
                        <Text  style={{fontFamily: 'DM Mono', fontSize: '12px', color: 'white',  fontWeight: 'bold',}}>Funny</Text>
                    </View>
                </View>
            </Card>
    );
    return(
            <View style={topStyles.container}>
                <View style={topStyles.mainImage}>
                    {card}
                </View>
                <View style={topStyles.restImage}>
                    <View style={topStyles.restImageRow}>
                        <View style={topStyles.singleImage}>
                            {card}
                        </View>
                        <View style={topStyles.singleImage}>
                            {card}
                        </View>
                    </View>
                    <View style={topStyles.restImageRow}>
                        <View style={topStyles.singleImage}>
                            {card}
                        </View>
                        <View style={topStyles.singleImage}>
                            {card}
                        </View>
                    </View>
                </View>
            </View>
    )
}


export default TopGallery;
