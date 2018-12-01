import React, {Component} from 'react';
import {ListView, Text} from 'react-native';
import { View } from 'native-base';

import Anime from './Anime';

export default class List extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state ={
            dataSource: ds.cloneWithRows(this.animes)
        }
    }

    animes =[
        'Boruto',
        'Dragon BAll Super',
        'Boku no Hero'
    ]

    render(){
        return(
        <View>
            <Text>With data sheet</Text>
            <ListView 
              dataSource={this.state.dataSource}
              renderRow={(rowData => <Anime nama={rowData}/>)}
            />
            <Text>With Maps:</Text>
            {this.animes.map((anime, key)=><Text key={key}>{anime}</Text>)}
        </View>
        )
    }
}