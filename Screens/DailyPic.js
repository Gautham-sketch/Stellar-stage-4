import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ImageBackground,
  Linking,
  Platform, } from 'react-native';
import axios from 'axios';   

export default class DailyPic extends React.Component{
  constructor(){
    super();
    this.state={
      apod : "",
    }
  }

  getApi=()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=lAvAhqa7cSrXeCYP0aCyIe0pC6Fq1lRvNsfbLzdz")
        .then(response=>{
          this.setState({
            apod : response.data
          })
        })
        .catch(error=>{
          Alert.alert("No link found !!");
        })
  } 
  
  render(){
    return(
      <View style = {styles.container}>
        <SafeAreaView styel={styles.Safe}/>
        <ImageBackground source={require("../assets/stars.gif")} style={styles.background}>
        <Text style = {styles.header}>DIALY PICTURES SCREEN</Text>
        <Text style = {styles.text}>{this.state.apod.title}</Text>
        <TouchableOpacity style = {styles.button}
        onPress={()=>{
          Linking.openURL(this.state.apod.url).catch(error=>{Alert.alert("Could'nt load page !!",error)})
        }}>
          <View>
            <Image source={require('../assets/play-video.png')} style = {styles.iconImage}></Image>
          </View>
        </TouchableOpacity>
        <Text style = {styles.text}>{this.state.apod.explanation}</Text>
       <View>
                
       </View>
      </ImageBackground>
      </View>
    );
   }
}

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
    Safe: {
      marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    button: {
      flex : 0.2,
      marginLeft : 120,
      marginRight : 120,
      marginTop : 150,
      borderRadius : 100,
      backgroundColor : "white",
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
  