import {Appbar} from "react-native-paper";
import React from "react";
import tailwind from "tailwind-rn";
import {Image, View} from "react-native";

export  class AppBarNavigation extends React.Component{

    render() {
        console.log(this.props)
        return (
            <Appbar.Header theme={{ colors: {primary: '#ffffff'} }} style={tailwind('flex')}>
                <View style={tailwind("w-5/6 h-12")}>
                    <Image resizeMode="contain" source={require('./../../images/ikhlas_icon.png')} />
                </View>
                <View style={tailwind("h-12")}>
                    <Appbar.Action icon="dots-horizontal"/>
                </View>
            </Appbar.Header>
        )
    }
}