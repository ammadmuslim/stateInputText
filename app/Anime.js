import React from 'react';
import {View, Text} from 'react-native';

export default class Anime extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.nama}</Text>
            </View>
        )
    }
}