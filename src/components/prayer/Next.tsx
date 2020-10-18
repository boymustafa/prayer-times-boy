import * as React from 'react';
import {Card, List} from 'react-native-paper';
import tailwind from "tailwind-rn";
import {View, Text} from "react-native";


export  class PrayerNext extends React.Component <any> {
    render() {
        return (
            <View>
                <Text style={tailwind('text-lg mb-3')}>Next Prayer Times</Text>
                <Card  elevation={4}>
                    <Card.Content>
                        <List.Item
                            title="First Item"
                            description="Item description"
                            left={props => <List.Icon {...props} icon="white-balance-sunny" />}
                            right={props => <List.Icon {...props} icon="chevron-right" />}
                        />
                    </Card.Content>
                    <Card.Content>
                        <View style={tailwind('flex-row justify-start')}>
                            <View style={tailwind("w-1/3 h-12 border-r-2")}>
                                <Text style={tailwind('text-center ')}>Ashar</Text>
                                <Text style={tailwind('text-center ')}>4:16 PM</Text>
                            </View>
                            <View style={tailwind("w-1/3 h-12 border-r-2")}>
                                <Text style={tailwind('text-center ')}>Ashar</Text>
                                <Text style={tailwind('text-center ')}>4:16 PM</Text>
                            </View>
                            <View style={tailwind("w-1/3 h-12")}>
                                <Text style={tailwind('text-center ')}>Ashar</Text>
                                <Text style={tailwind('text-center ')}>4:16 PM</Text>
                            </View>

                        </View>
                    </Card.Content>

                </Card>
            </View>
        )
    }
};
