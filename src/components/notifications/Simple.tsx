import React from 'react';
import tailwind from "tailwind-rn";
import {Text} from "react-native";
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    icon: string;
    text: string;
    readMore: string;
}

export  class NotificationSimple extends React.Component <Props>{
    render() {
        return (
            <View style={tailwind('flex-row justify-start px-2 py-3 bg-orange-100 border border-orange-300 rounded-md ')}>
                <View style={tailwind('flex-grow-0 flex-shrink-0 px-2 py-1')}>
                    <MaterialIcons style={{ color: 'black' }}
                                   name={'notifications'}
                                   size={18} />
                </View>
                <View style={tailwind('flex-grow flex-shrink')}>
                    <Text style={tailwind('text-gray-700 text-sm leading-5')}>{this.props.text}</Text>
                    <Text style={tailwind('text-sm leading-5 font-bold')}>{this.props.readMore}</Text>
                </View>
            </View>
        )
    }
}
