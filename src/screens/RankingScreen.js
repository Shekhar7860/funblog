import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const advert = firebase.admob().interstitial('ca-app-pub-3372831736678620/8944003029')
const advert2 = firebase.admob().interstitial('ca-app-pub-3372831736678620/7494584748')
const request = new AdRequest();
request.addKeyword('foobar');
export default class RankingScreen extends Component {

  constructor() {
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      image : "",
      details : ""
    };
 
  }
  componentDidMount = () => {
    advert.loadAd(request.build());
 
    advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
    });
    
    setTimeout(() => {
      if (advert.isLoaded()) {
        console.log('working')
        advert.show();
      } else {
        console.log('error occured')
      }
    }, 1000);
    const {state} = this.props.navigation;
    console.log(state.params);
     if(state.params)
     {
       console.log(state.parms, 'params');
       
       this.setState({details:state.params.data.description});
    this.setState({image:state.params.data.image});
   
     }
     else{
       this.setState({user:" "});
     }
  }

  back = () => {
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
    this.props.navigation.navigate("HomeScreen", {str : "dssaddd"})
  }
 
  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1, flexDirection: 'column'}}>
       <View style={styles.toolbar}>
                  <TouchableOpacity
                     style={styles.toolbarButton}
          onPress={() => {
            this.back()
          }}
        >
         <Image style={{width:30, marginLeft:5, height:30}} source={require('../images/back.png')}></Image>
        </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>FunBlog</Text>
                    <TouchableOpacity
                    style={styles.toolbarButton}
         
        >
          <Icon
            name="check-circle"
            size={20}
            color="#FFFFFF"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
                </View>
                <Image
                  style={{width:300, height : 300, marginTop:10, alignSelf:'center'}}
                  source={{uri: this.state.image}}
                />
                <ScrollView>
                <Text style={{margin:10, alignSelf : 'center'}}>{this.state.details}</Text>
                <Banner
       style={{alignSelf:'center',marginLeft:20}}
    size={"LARGE_BANNER"}
  unitId={"ca-app-pub-3372831736678620/9546033010"}
  request={request.build()}
  onAdLoaded={() => {
    console.log('Advert loaded');
  }} />
                </ScrollView>
                
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar:{
    backgroundColor:'#4834d4',
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row'    //Step 1
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
    width: 50,            //Step 2
    color:'#fff',
    textAlign:'center'
},
toolbarTitle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    flex:1, 
    fontSize:20               //Step 3
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
