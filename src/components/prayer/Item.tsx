import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tailwind from "tailwind-rn";

interface Props {
    name: string;
    time: string;
    icon: string;
}

export default class PrayTimeItem extends React.Component <Props>{
    render() {
        return (
            <View style={tailwind('flex-row justify-between py-2 px-3 bg-white my-1')}>
                <View>
                    <Text style={tailwind('text-gray-700 text-sm')}>{this.props.name}</Text>

                    <Text style={tailwind('text-gray-700 text-base')}>{this.props.time}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.icon} resizeMode="contain" source={this.props.icon} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 30
    }
})