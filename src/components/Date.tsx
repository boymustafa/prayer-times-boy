import React from 'react';
import { Text, StyleSheet } from 'react-native';
// @ts-ignore
import HijriDate from 'hijri-date/lib/safe';
import { inject,observer } from 'mobx-react';
import tailwind from "tailwind-rn";

@inject('LocationStore')
@observer
export default class Header extends React.Component<any, any> {
    _formatDate = (date: any) => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    _formatDateHijri = (date: any) => {
        const monthNames = [
            "Muharram", "Shafar", "Rabi’ul Awwal",
            "Rabi’ul Akhir", "Jumadil Awwal", "Jumadil Akhir", "Rajab",
            "Sya’ban", "Ramadhan", "Syawal",
            "Dzulqa’dah", "Dzulhijjah"
        ];

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }


    render() {
        const today = this._formatDate(new Date());
        const hijriToday = this._formatDateHijri(new HijriDate());


        return (
                <Text style={tailwind("text-white")}>{hijriToday} / {today}</Text>
        )
    }
}

