// import React, {Component} from 'react';
// import {Container, Header, Title, Button, Content, Text} from 'native-base';

// export default class App extends Component{
//   state={
//     number: 0,
//   }

//   handleIncrement(){
//     if (this.state.number < 10){
//       //untuk mengubah nilai data state
//       this.setState({
//         number: this.state.number + 1, // property(porps) number akan ditambah 1
//       });
//     }else {
//       alert('Dzikir sudah '+ this.state.number);
//       this.resetState();
//     }
//   }

//   resetState(){
//     this.setState({
//       number: 0,
//     })
//   }

//   render(){
//     return(
//       <Container style={{flex: 1}}>
//         <Header>
//           <Title style={{marginTop: 10}}>Tasbih Digital</Title>
//         </Header>
//         <Content>
//           {/*mengambil nilai dari data state*/}
//           <Text style={{textAlign: 'center', marginTop: 180, fontSize: 60}}>{this.state.number}</Text>
//           <Button rounded success block style={{marginRight: 70, marginLeft: 70, marginTop: 30}} onPress={()=>this.handleIncrement() /*untuk memanggil function*/}>
//           <Text>Button</Text>
//           </Button>
//         </Content>
//       </Container>
//     )
//   }
// }

// import React, {Component} from 'react';
// import {Container} from 'native-base';
// import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

// import MyAnimeList from './app/List';

// export default class App extends Component{
//   render(){
//     return(
//       <Container style={{backgroundColor: 'grey', flex: 1}}>
//         <MyAnimeList/>
//       </Container>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     backgroundColor: '#c9c8c3',
//   },  
//   body: {
//     flex: 4,
//     backgroundColor: 'grey',
//   },
// });

import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      text: 'Type Caracter',
      name: 'When you submit button'
    }
  }
  
  handleClick(){
    this.setState({
      name: this.state.text
    })
  }

  render(){
    let name;
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{fontSize: 15}}>{this.state.name}</Text>
        </View>
        <View style={styles.footer}>
          <TextInput onChangeText={(text)=>this.setState({text})} style={styles.inputText}>
          </TextInput>
          <Text>  </Text>
          <Button onPress={()=>this.handleClick()} color="green" title="Submit"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inputText: {
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    height: 30,
    width: 250,

  }
})






