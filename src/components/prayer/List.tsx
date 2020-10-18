import React from 'react';
import { View } from 'react-native';
import PrayTimeItem from './Item';
import {PrayNames} from '../../constants/prayNames';
import prayIcons from '../../constants/prayIcons';
import {inject, observer} from "mobx-react";

import {LocationStore} from "../stores/LocationStore";


interface PrayerProps {
    LocationStore?: LocationStore
}

@inject('LocationStore')
@observer
export  class PrayTimeLists extends React.Component<PrayerProps> {
    render() {
        const prayTimes = this.props.LocationStore.prayerTimes
        const lists = Object.keys(prayTimes).map(key => {
            const _name = PrayNames[key];
            if (key === "imsak" || key === "sunset" || key === "midnight") {
                return;
            }
            return <PrayTimeItem key={key} name={_name} time={prayTimes[key]} icon={prayIcons[key][0]} />

        })
        return (
            <View>
                {lists}
            </View>
        )
    }
}

