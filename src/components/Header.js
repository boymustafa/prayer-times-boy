import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HijriDate from 'hijri-date/lib/safe';
import colors from '../constants/colors';

export default class Header extends React.Component {
    _formatDate = date => {
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

    _formatDateHijri = date => {
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
            <View style={styles.container}>
                <Text style={styles.dateText}>{hijriToday} / {today}</Text>
                <Text style={styles.locationText}>{this.props.location}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 25
    },
    dateText: {
        fontSize: 18,
        color: colors.white
    },
    locationText: {
        fontSize: 16,
        color: colors.white
    }
})