import React from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {NotificationSimple} from "../components/notifications/Simple";
import {PrayerOverview} from "../components/prayer/Overview";
import {Articles} from "../components/articles/Items";
import {PrayerNext} from "../components/prayer/Next";
import * as Location from "expo-location";
import {inject, observer} from "mobx-react";
import {LocationStore} from "../stores/LocationStore";
import {PrayerStore} from "../stores/PrayerStore";
import PrayerTimes from 'prayer-times';
import {AppBarNavigation} from './components/navigations/AppBar';
const prayTimes = new PrayerTimes();

interface HomeProps {
    LocationStore?: LocationStore
    PrayerStore?: PrayerStore
}

@inject('LocationStore', 'PrayerStore')
@observer
export class HomeScreen extends React.Component<HomeProps>{

    async componentDidMount() {
        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            let addressCurrent = await Location.reverseGeocodeAsync(location.coords);
            const times = prayTimes.getTimes(new Date(),[location.coords.latitude,location.coords.longitude],+8,'auto','24h')

            // await this.props.LocationStore.setLocation(addressCurrent[0].city)
            console.log(addressCurrent[0].city);
            console.log(this.props.LocationStore?.location);
            await this.props.PrayerStore.setPrayerTimes(times)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.props.LocationStore)
        return (

                <ScrollView style={tailwind("flex-1 bg-white")}>
                    <View>
                        <PrayerOverview />
                    </View>
                    <View style={tailwind('p-4')}>
                        <NotificationSimple icon={'bell'} readMore={'Find out more'}
                                            text={'Welcome to IKHLAS, a line of business under airasia.com that mainly caters to Muslim communities around the world by providing unparalleled access to faith-based practices.'}>

                        </NotificationSimple>
                    </View>
                    <View style={tailwind('p-4')}>
                        <PrayerNext />
                    </View>
                    <View style={tailwind('p-4')}>
                        <Articles></Articles>
                    </View>
                </ScrollView>
            )
    }
}