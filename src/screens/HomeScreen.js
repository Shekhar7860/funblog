import { View, Text, StyleSheet, TouchableOpacity, Image,  Share,  TouchableHighlight, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert = firebase.admob().interstitial('ca-app-pub-3372831736678620/1696068394')
const advert2 = firebase.admob().interstitial('ca-app-pub-3372831736678620/9085554931')
const advert3 = firebase.admob().interstitial('ca-app-pub-3372831736678620/4098265216')
const request = new AdRequest();
request.addKeyword('foobar');
export default class HomeScreen extends Component {


constructor() {

super();

this.state = {
position: 1,
interval: null,
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
  SplashScreen.hide();
  fetch('https://www.funblog.in/api/getlisting?page=1',
  {
    method: "POST",
    headers: {
     "Accept": "application/json",
     "Content-Type": "application/json"
    },
   
 }).then((response) => 
 this.myres(response.json()))
 .catch((error) => {
   console.error('err', error);
 });
}
_openDetail = (value) => {
  advert2.loadAd(request.build());
 
    advert2.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
    });
      if (advert2.isLoaded()) {
        console.log('working')
        advert2.show();
      } else {
        console.log('error occured')
      }
this.props.navigation.navigate('RankingScreen', { data: value })
}

share = () => {
  advert.loadAd(request.build())

advert.on('onAdLoaded', () => {
   console.log('Advert2 ready to show.')
})

advert.show()
  Share.share({
    message: 'Checkout FunBlog- https://play.google.com/store/apps/details?id=com.funblog&hl=en',
    url: 'https://play.google.com/store/apps/details?id=com.funblog&hl=en',
    title: 'Start Reading Articles'
  }, {
    // Android only:
    dialogTitle: 'Share the app',
    // iOS only:
    excludedActivityTypes: [
      'com.apple.UIKit.activity.PostToTwitter'
    ]
  })
}

openMenu = () => {
  advert3.loadAd(request.build())

advert3.on('onAdLoaded', () => {
   console.log('Advert2 ready to show.')
})

advert3.show()
  this.props.navigation.dispatch(DrawerActions.toggleDrawer())
}
componentWillMount() {
this.setState({
interval: setInterval(() => {
this.setState({
position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
});
}, 5000)
});
}
componentWillUnmount() {
clearInterval(this.state.interval);
}

myres = (reslt) => {
reslt.then(res => {
  console.log(res);
  this.setState({names : res.result})
})
}
space(){
return(<View style={{height: 50, width: 2, backgroundColor: 'black'}}/>)
}
render() {

const images = [
'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/business4i.jpeg?alt=media&token=160034be-416f-4883-af35-b9a9c1839e63',
'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/images6.jpeg?alt=media&token=b5a59a46-e658-44a4-af1b-8dcbb8ea4abc',
'https://firebasestorage.googleapis.com/v0/b/businessideatest.appspot.com/o/images10.jpeg?alt=media&token=675800bb-6695-490b-b24f-70d10e6a1bdd'
];
return (
<View style={{flex:1}}>
<View style={styles.toolbar}>
<TouchableOpacity
style={styles.toolbarButton}
onPress={() => {
this.openMenu()
}}
>
<Icon
name="bars"
size={20}
color="#FFFFFF"
style={styles.headerLeftIconStyle}
/>
</TouchableOpacity>
<Text style={styles.toolbarTitle}>FunBlog</Text>
<TouchableOpacity
style={styles.toolbarButton}
onPress={() => {
  this.share() 
  }}
>
<Icon
name="share"
size={20}
color="#FFFFFF"
style={styles.headerLeftIconStyle}
/>
</TouchableOpacity>
</View>
<Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"LARGE_BANNER"}
  unitId={"ca-app-pub-3372831736678620/7193304636"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
<Slideshow
dataSource={this.state.dataSource}
position={this.state.position}
onPositionChanged={position => this.setState({ position })}
/>
{/* <BannerView
placementId={"665254733991193_665876810595652"}
type="large"
onPress={() => console.log('click')}
onError={err => console.log('myyyyerror', err)}
/> */}
<FlatList
data={this.state.names}
style={{flexDirection: 'column', marginLeft:10}}
numColumns={3}
showsVerticalScrollIndicator={false}
renderItem={({item}) =>
<View >
<TouchableOpacity onPress={() => this._openDetail(item)}>
<View style={styles.rowElement}>
<View style={styles.emptyWidth}></View>
<View style={styles.imageWidth}>
<Image
style={styles.image}
source={{uri: item.image}}
/>
</View>
</View>
<View style={styles.rowElement}>
<View style={styles.emptyWidth}></View>
<View style={styles.imageWidth}>
<Text style={styles.textalignment2}>{item.createdon} </Text>
</View>
</View>

<View style={styles.rowElement}>
<View style={styles.emptyWidth}></View>
<View style={styles.imageWidth}>
<Text style={styles.textalignment}>{item.title}</Text>
</View>
</View>
</TouchableOpacity>
</View>
}
keyExtractor={item => item.id}
/>










</View>
);
}
}


const styles = StyleSheet.create({
toolbar:{
backgroundColor:'#4834d4',
paddingTop:20,
paddingBottom:20,
flexDirection:'row' //Step 1
},
textalignment:{
marginTop:5,
fontSize:12
},
textalignment2:{
marginTop:5,
fontSize:10,
color : '#95a5a6'
},
rowElement:{
width:'100%',
flexDirection : 'row',
}, 
emptyWidth : {
width : '10%'
},
imageWidth : {
width:80
},

image: {
marginTop:20,
width: 80, height: 70
},
toolbarButton:{
width: 50, //Step 2
color:'#fff',
textAlign:'center'
},
toolbarTitle:{
color:'#fff',
textAlign:'center',
fontWeight:'bold',
flex:1, 
fontSize:20 //Step 3
}, 
headerLeftIconStyle: {
marginLeft: 15,
},
searchInputContainer: {
flex: 1,
borderWidth: 1,
borderRadius: 20,
borderColor: '#999',
flexDirection: 'row',
backgroundColor: 'white',
},
searchInputIconStyle: {
padding: 5,
},
searchInputStyle: {
flex: 1,
paddingRight: 10,
textAlign: 'left',
},
});