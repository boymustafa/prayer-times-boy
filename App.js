import React, {useState,useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';
import * as Location from 'expo-location';


const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Kuala Lumpur',
    coord: [-4.565565, 136.887110]
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.findCoordinates();
    this.state = {
      times: prayTimes.getTimes(new Date(), [undefined,undefined], +8, 'auto', '24h'),
      // times: [],
      location: null,
    }
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
          console.log(position.coords.latitude);
          this.setState({ location });

          this.setState({times: prayTimes.getTimes(new Date(),[position.coords.latitude,position.coords.longitude],+8,'auto','24h')});

        },
        // error => Alert.alert(error.message),
        error => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
        <ScrollView style={styles.container}>
          <Header location="Kuala Lumpur" />
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
