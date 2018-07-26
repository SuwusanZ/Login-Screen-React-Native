import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }
  
  

  checkForValidFields = () =>{
   
    if (this.state.username === '' || this.state.password === ''){
      Alert.alert("Invalid input");
    }else if (this.state.username === 'myteacher' && this.state.password === '123'){
      Alert.alert("WELCOME myteacher")
    }else{
      Alert.alert("You pressed login!");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('./Genius-Plaza-transp-logo.png')}
          />
        <Text 
          style={styles.text}>Log in
        </Text>  
        <TextInput 
          placeholder="Username" 
          //ref= {(el) => { this.username = el; }}
          onChangeText={(username) => this.setState({username})}
          autoCapitalize="none"
          value={this.state.username}
          style={styles.textInput}
        /> 
        <TextInput
         placeholder="Password"
         ref= {(el) => { this.password = el; }}
         onChangeText={(password) => this.setState({password})}
         value={this.state.password}
         secureTextEntry
         style={styles.textInput}
        /> 
        <TouchableOpacity 
          style={styles.buttonStyle} onPress={this.checkForValidFields}>
          <Text 
            style={styles.buttonTextStyle}>LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  imageStyle: {
    height: '15%',
    width: '85%',
    position: 'absolute',
    top: '25%',
    resizeMode: 'contain'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#2980b9',
    width: '85%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    fontSize: 15,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: '85%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'black',
    paddingHorizontal: 10,
    marginTop: 20
  }

});
