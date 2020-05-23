import * as React from 'react';
import {View, Text} from 'react-native';
import topStyles from './Styles';
import Card from 'react-bootstrap/Card';
const TopGalleryComponent = props => {
  let cards = [];
  props.children.forEach(imageParam => {
    cards.push(
      <Card style={{width: '100%', height: '100%', borderStyle: 'solid', borderWidth: '1px', borderColor:'#ffd31d'}}>
        <Card.Body>
          <Card.Img
            variant="bottom"
            style={{height: '95%', width: '100%'}}
            src={
              'http://localhost:8080/upload/static/images/' + imageParam.name
            }
          />
          <Card.Text
            style={{
              marginTop: '1%',
              paddingBottom: '2%',
            }}>
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
          </Card.Text>
        </Card.Body>
      </Card>,
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
};

export default TopGalleryComponent;

/*
      <Card style={{width: '100%', height: '100%'}} className="text-white ">
          <View
            style={{
              width: '100%',
              height: '30px',
              backgroundColor: '#black',
              opacity: '100%',
              borderRadius: '2%',
            }}>
            <Text style={{color: 'black', fontSize: '24px'}}>
              {imageParam.title}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '0.2%',
              marginTop: '1%',
              backgroundColor: '#ffd31d',
            }}
          />
        <Card.Img
          style={{height: '93%', width: '98%', margin: '1%'}}
          src={'http://localhost:8080/upload/static/images/'+ imageParam.name}
          alt="Card image"
        />
      </Card>
      */
