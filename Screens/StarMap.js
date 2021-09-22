import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  Platform, } from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMap extends React.Component{
  constructor(){
    super();
    this.state={
      latitude : "",
      longitude : "",
    }
  }

   render(){
    return(
      <View style = {styles.container}>
        <SafeAreaView style={styles.Safe}/>
       <Text style = {styles.header}>STAR MAP SCREEN</Text>
       <View>
         <TextInput
         style={{height:40,borderColor:"grey",borderWidth:1,backgroundColor : "grey"}}
         placeholder="Enter your latitude"
         placeholderTextColor="white"
         onChangeText={(text)=>{
           this.setState({
             latitude : text
           })
         }}/>
         <TextInput
         style={{height:40,borderColor:"grey",borderWidth:1,backgroundColor : "grey"}}
         placeholder="Enter your longitude"
         placeholderTextColor="white"
         onChangeText={(text)=>{
           this.setState({
             longitude : text
           })
         }}/>
         <WebView
         scalesPageToFit={true}
         source={{uri:path}}
         style={{marginTop : 20,marginBottom : 20}}
         />
       </View>
      </View>
    );
   }
}

const path = "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : 'white'
    },
    titlebar: {
      flex : 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    button: {
      flex : 0.2,
      marginLeft : 120,
      marginRight : 120,
      marginTop : 150,
      borderRadius : 100,
      backgroundColor : "white",
    },
    Safe: {
      marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
      fontSize : 32,
      fontWeight : 'bold',
      color : "black",
      alignItems: 'center',
      justifyContent: 'center',
      padding : 25
    },
    text: {
      fontSize : 18,
      fontWeight : 'bold',
      color : "pink",
      alignItems: 'center',
      justifyContent: 'center',
      padding : 25
    },
    number: {
      position : 'absolute',
      fontWeight : 'bold',
      color : 'red',
    },
    background: {
      flex : 1,
      resizeMode : 'cover',
    },
    iconImage: {
      height : 50,
      width : 50,
      resizeMode : 'contain',
      position : 'absolute',
    }
  });
  