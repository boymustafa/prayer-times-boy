import React from 'react';
import { ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';
import Location from "../components/Location";
import {PrayTimeLists} from "../components/prayer/List"


export function PrayerTimeScreen(props: any) {

    return (
        <ScrollView style={tailwind("flex-1 bg-teal-400 p-10")}>
            <Location/>
            <PrayTimeLists/>
        </ScrollView>
    )
}