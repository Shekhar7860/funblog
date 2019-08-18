import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';


class DrawerContent extends Component {
  state = {
    channels: [
      { screen: 'HomeScreen', title: 'Home', icon: 'home' },
      { screen: 'RankingScreen', title: 'Open WebSite', icon: 'list-ordered' },
    ],
  };

  navigateToScreen = route => () => {
if(route == "RankingScreen")
{
  Linking.openURL("https://www.funblog.in/").catch((err) => console.error('An error occurred', err));
}
else
{
  this.props.navigation.closeDrawer();  
}
  };

  renderChannelButtons() {
    return this.state.channels.map(({ screen, title, icon }) => (
      <TouchableOpacity
        key={screen + title}
        onPress={this.navigateToScreen(screen)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={icon}
            size={20}
            color="white"
            style={{ margin: 15, width: 20 }}
          />
          <Text style={{ color: 'white', marginTop: 17 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView>{this.renderChannelButtons()}</ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#444',
  },
};

export default DrawerContent;
