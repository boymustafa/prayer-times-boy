import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tailwind from "tailwind-rn";
import {inject, observer} from "mobx-react";
import {LocationStore} from "../../stores/LocationStore";

interface OverviewProps {
    LocationStore?: LocationStore
}

@inject('LocationStore')
@observer
export class PrayerOverview extends React.Component<OverviewProps>{

    render() {

        const location = this.props.LocationStore.location
        console.log(this.props.LocationStore.prayerTimesOnly)

        return (
            <View style={tailwind('flex-row justify-between px-5 py-5 bg-teal-300 mb-1')}>
                <View>
                    <Text style={tailwind('text-white text-sm')}>Zohor</Text>

                    <Text style={tailwind('text-white text-3xl')}>1.30 PM</Text>
                    <Text style={tailwind('text-white text-sm')}>Kuala Lumpur</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.icon} resizeMode="contain" source={require('./../../images/dummy.png')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 70,
        height: 70
    }
})