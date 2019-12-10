import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, StatusBar, Image} from 'react-native';

// COMPONENTES 

// export default class App extends React.Component {
//   render(){
//     return(
//       <View>
//         <Text>Teste</Text>
//       </View>
//     )
//   }
// }

// USO DE PROPS 

// class Teste extends React.Component{
//   render(){
//     return(
//       <View style={{alignItems: 'center'}}>
//         <Text>Teste de props: {this.props.name}</Text>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component{
//   render(){
//     return(
//       <View style={{alignItems: 'center', top:  50}}>
//         <Teste name= 'Marco'/>
//         <Teste name= 'Emanuel'/>
//         <Teste name= 'Biel'/>
//       </View>
//     )
//   }
// }

// USO DE STATE 

// class Blink extends React.Component{
//   componentDidMount(){
//     setInterval(()=>(
//       this.setState(previousState =>(
//         { isShowingText: !previousState.isShowingText}
//       ))
//     ), 1000);
//   }

//   state = { isShowingText: true };

//   render(){
//     if (!this.state.isShowingText){
//       return null;
//     }
//     return(
//       <Text style={styles.pintaGreen}>{this.props.text}</Text>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Blink text='Trás a bebida que pisca'/>
//         <Blink text='Pisca '/>
//         <Blink text='Pisca'/>
//         <Blink text='Que faz minha buceta piscar'/>
//       </View>
//     );
//   }
// }

// Uso de Styles

const styles = StyleSheet.create({
  pintaAzul:{
    color: 'blue',
    fontSize: 30
  },
  pintaRed:{
    color:'red',
    fontSize: 20
  },
  pintaGreen:{
    color: 'green',
    fontSize: 15
  }
});

// Height, Width e FlexBox

// export default class App extends React.Component{
//   render(){
//     return(
//       <View style={{flex: 1, flexDirection: 'column-reverse'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'green'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
//       </View>
//     );
//   }
// }

// flexDirection: column, row, row-reverse, column-reverse
// justifyContent: flex-start, flex-end, center, space-between, space-around, space-evenly
// alignItems / alignSelf: stretch, flex-start, flex-end, center, baseline
// alignContent: flex-start, flex-end, center, stretch, space-around, space-between
// flexWrap: 'nowrap', 'wrap'

// TextInput 

// export default class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {text: ''};
//   }
//   render(){
//     return(
//       <SafeAreaView style= { { flex: 1, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
//       <View style={{padding: 10}}>
//         <Image
//         style={{width}}
//         />
//         <TextInput
//           style={{height: 40}}
//           placeholder="Digite algo aqui"
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//         />
//         <Text style={{padding: 10, fontSize: 12}}>
//           {this.state.text.split(' ').map((word) => word && 'comi o cu de quem ta lendo').join(' ')}
//         </Text>
//       </View>
//       </SafeAreaView>
//     );
//   }
// }