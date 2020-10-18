import React from 'react';
import { View, Text } from 'react-native';
import { inject,observer } from 'mobx-react';
import tailwind from "tailwind-rn";
import DateComponent  from './Date';
import {LocationStore} from "../stores/LocationStore";

interface HomeProps {
    LocationStore?: LocationStore
}

@inject('LocationStore')
@observer
export default class Header extends React.Component<HomeProps> {

     render() {
        const location = this.props.LocationStore.location
        return (
            <View style={tailwind("py-3")}>
                <DateComponent />
                <Text style={tailwind("text-white")}>{location}</Text>
            </View>

        )
    }
}
