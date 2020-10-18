/*
import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './components/Header';
import PrayTimeLists from './components/PrayTimeLists';
import colors from './constants/colors';
import * as Location from 'expo-location';
import tailwind from 'tailwind-rn';

const prayTimes = new PrayerTimes();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.findCoordinates();
    this.state = {
      times: prayTimes.getTimes(new Date(), [undefined,undefined], +8, 'auto', '24h'),
      // times: [],
      location: "",
    }
  }

  // findCoordinates = () => {
  //   navigator.geolocation.getCurrentPosition(
  //       position => {
  //         const location = JSON.stringify(position);
  //         console.log(position.coords.latitude);
  //         this.setState({ location });
  //
  //         this.setState({times: prayTimes.getTimes(new Date(),[position.coords.latitude,position.coords.longitude],+8,'auto','24h')});
  //
  //       },
  //       // error => Alert.alert(error.message),
  //       error => alert(error.message),
  //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // };
  async componentDidMount() {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let addressCurrent = await Location.reverseGeocodeAsync(location.coords);
      console.log(addressCurrent[0].city);
      this.setState({ location: addressCurrent[0].city});
      this.setState({times: prayTimes.getTimes(new Date(),[location.coords.latitude,location.coords.longitude],+8,'auto','24h')});
      // this.updateState(location);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
        <ScrollView style={tailwind("flex-1 bg-teal-400 p-10")}>
          <Header location={this.state.location} />
          <PrayTimeLists times={this.state.times} />

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ikhlas_color,
    padding: 30,
  },
  configContainer: {
    alignItems: 'flex-end',
    paddingBottom: 15
  },
  locationSelector: {
    marginBottom: 10
  }
});
*/


import React from 'react';
import { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider} from "mobx-react";
import { HomeScreen } from './screens/Home';
import { PrayerTimeScreen } from './screens/PrayerTime';
import stores from './stores'
import * as Location from 'expo-location';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Font  from 'expo-font'
/*
import {
    setCustomText
} from 'react-native-global-props'

*/

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Appbar } from 'react-native-paper';

export default class App extends Component {
   state = {
        location: false,
        fontLoaded: false
    };

    /*async componentDidMount() {
        await Font.loadAsync({
            'DM Sans': 'https://fonts.gstatic.com/s/dmsans/v5/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2'
        })
        .then(() => {
            this.setState({ fontLoaded: true });
            this.defaultFonts();
        });
    }

    defaultFonts(){
        const customTextProps = {
            style: {
                fontFamily: 'DM Sans'
            }
        }
        setCustomText(customTextProps)
    }*/


    render() {
        return (
            <Provider {...stores}>
                <NavigationContainer>
                    <Appbar.Header>
                        <Appbar.BackAction  />
                        <Appbar.Content title="Title"/>
                        <Appbar.Action icon="dots-horizontal"  />
                    </Appbar.Header>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreen}
                                    options={{
                                        tabBarLabel: 'Prayer Time',
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons name="home" color={color} size={size} />
                                        )
                                    }}
                        />
                        <Tab.Screen name="Prayer Time"
                                    component={PrayerTimeScreen}
                                    options={{
                                        tabBarLabel: 'Prayer Time',
                                        tabBarIcon: ({ color, size }) => (
                                            <MaterialCommunityIcons name="bell" color={color} size={size} />
                                        ),
                                        tabBarBadge: 3,
                                    }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}
