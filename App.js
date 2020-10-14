import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';


const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Kuala Lumpur',
    coord: [3.155470, 101.665250]
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: prayTimes.getTimes(new Date(), locations[0].coord, +8, 'auto', '24h'),
      locationSelected: locations[0]
    }
  }

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
