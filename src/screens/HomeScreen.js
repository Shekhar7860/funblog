
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight, FlatList } from 'react-native';
import {  DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
 import UnityAds from 'react-native-unity-ads';
import { InterstitialAdManager, NativeAdsManager,  BannerView, AdSettings  } from 'react-native-fbads';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert = firebase.admob().interstitial('ca-app-pub-3372831736678620/1696068394')
const request = new AdRequest();
request.addKeyword('foobar');
export default class ChannelScreen extends Component {
  

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      defaultPlacementState: '',
      names: [
        {
           id: 0,
           date: '07 June 2019',
           text : 'How to Start A Business With 0 Investment',
           url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'
        },
        {
           id: 1,
           date: '08 June 2019',
           text : 'How To Prevent Hair From Falling',
           url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg'
        },
        {
           id: 2,
           date: '09 June 2019',
           text : 'Who Will Win The ICC World Cup 2019',
           url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg'
        },
        {
           id: 3,
           date: '09 June 2019',
          text: 'How To Achieve Success In Network Marketing',
           url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'
        },
        {
          id: 4,
          date: '11 June 2019',
          text: 'How To Become More Successfull',
          url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg'
       },
       {
          id: 5,
          date: '12 June 2019',
          text: 'Why Do You Need Money',
          url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg'
       }
     ],
      dataSource: [
        {
          title: 'Tips To Protect Hair From Falling',
          url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg',
        }, {
          title: 'Who Will The ICC Cricket World Cup 2015',
  
          url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg',
        }, {
          title: 'How To Get Success In Network Marketing',
        
          url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg',
        },
      ],
    };
 
  }
  componentDidMount() {
    // UnityAds.init('YOUR_GAME_ID');
    UnityAds.init('1113851');

    this._updateDefaultPlacementState();
    
    UnityAds.addEventListener('onReady', placementId => {
        this._updateDefaultPlacementState();

        console.log(`Ad with placementId "${placementId}" is ready.`);
    });

    UnityAds.addEventListener('onStart', placementId => {
        console.log(`Ad with placementId "${placementId}" started.`);
    });

    UnityAds.addEventListener('onFinish', (placementId, result) => {
        console.log(JSON.stringify(placementId));
        console.log(JSON.stringify(result));
        console.log(`Ad with placementId ${placementId} finished with result "${result}".`);
    });

    UnityAds.addEventListener('onError', (error, message) => {
        console.log(error);
        console.log(message);
    });
}

render() {
    return (
        <View style={styles.container}>
        <Text onPress={() => this._updateDefaultPlacementState()}>Tap to get default ad's state: { this.state.defaultPlacementState }</Text>
        <Text onPress={() => this._showDefaultPlacementAd()} style={styles.text}>Tap here to start playing default ad.</Text>
        </View>
    );
}
_updateDefaultPlacementState() {
    UnityAds.getState(defaultPlacementState => {
        this.setState({
            defaultPlacementState: defaultPlacementState
        });
    });
}
_showDefaultPlacementAd() {
    UnityAds.show();
}
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 40,
}
});

class Test extends Component {
  componentWillReceiveProps(newProps){
   
    console.log("hiiiii")
  }

render() {
  return ( 
    <View>
      <Text>{this.props.check}</Text>
    </View>
  
  )
}
}