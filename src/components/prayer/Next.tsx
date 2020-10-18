import * as React from 'react';
import {Card, List} from 'react-native-paper';
import tailwind from "tailwind-rn";
import {View, Text, Image} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";


export  class PrayerNext extends React.Component <any> {
    render() {
        return (
            <View>
                <Text style={tailwind('text-xl leading-8 mb-3')}>Next Prayer Times</Text>
                <Card  elevation={4}>
                    <Card.Content style={tailwind("h-20")}>
                        <View style={tailwind('flex-row justify-start')}>
                            <View style={tailwind("w-3/12 h-12")}>
                                <Image resizeMode="contain" source={require('./../../images/cloudy.png')} />
                            </View>
                            <View style={tailwind("w-8/12 h-12")}>
                                <Text style={tailwind('text-xl leading-5 font-normal ')}>28 Safar 1442</Text>
                                <Text style={tailwind('text-xs text-gray-400  leading-5 font-normal ')}>Friday, 16 October 2020</Text>
                            </View>
                            <View style={tailwind("w-1/12 h-12")}>
                                <MaterialIcons style={{ color: 'gray' }}
                                               name={'chevron-right'}
                                               size={24} />
                            </View>
                        </View>

                        {/*<List.Item*/}
                        {/*    title="First Item"*/}
                        {/*    description="Item description"*/}
                        {/*    // left={props => <List.Icon {...props} icon="white-balance-sunny" />}*/}
                        {/*    left={props => <List.Icon {...props} icon="white-balance-sunny" />}*/}
                        {/*    right={props => <List.Icon {...props} icon="chevron-right" />}*/}
                        {/*/>*/}
                    </Card.Content>
                    <Card.Content>
                        <View style={tailwind('flex-row justify-start')}>
                            <View style={tailwind("w-1/3 h-12 border-r-2  border-gray-300")}>
                                <Text style={tailwind('text-center text-xs text-gray-400 leading-5 font-normal')}>Ashar</Text>
                                <Text style={tailwind('text-center text-base leading-5 font-normal')}>4:16 PM</Text>
                            </View>
                            <View style={tailwind("w-1/3 h-12 border-r-2  border-gray-300")}>
                                <Text style={tailwind('text-center text-xs text-gray-400 leading-5 font-normal ')}>Ashar</Text>
                                <Text style={tailwind('text-center text-base leading-5 font-normal ')}>4:16 PM</Text>
                            </View>
                            <View style={tailwind("w-1/3 h-12")}>
                                <Text style={tailwind('text-center text-xs text-gray-400 leading-5 font-normal ')}>Ashar</Text>
                                <Text style={tailwind('text-center text-base leading-5 font-normal ')}>4:16 PM</Text>
                            </View>

                        </View>
                    </Card.Content>

                </Card>
            </View>
        )
    }
};
