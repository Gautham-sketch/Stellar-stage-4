import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ImageBackground, } from 'react-native';

export default class HomeScreen extends React.Component{
   render(){
    return(
      <View style = {styles.container}>
       <Text style = {styles.header}>HOME SCREEN</Text>
      <View>
        <TouchableOpacity
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Star Map");
        }}>
          <Text style = {styles.text}>Star Map</Text>
          <Image
          source = {require("../assets/star_map.png")} 
          style = {styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Dialy Pictures");
        }}>
          <Text style = {styles.text}>Dialy Pictures</Text>
          <Image
          source = {require("../assets/daily_pictures.png")} 
          style = {styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate("Space Crafts");
        }}>
          <Text style = {styles.text}>Space Crafts</Text>
          <Image
          source = {require("../assets/spacecraft.png")} 
          style = {styles.iconImage}/>
        </TouchableOpacity>
      </View>
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
    button: {
      flex : 0.2,
      marginLeft : 120,
      marginRight : 120,
      marginTop : 150,
      borderRadius : 100,
      backgroundColor : "white",
      borderColor : "black",
      borderWidth : 1,
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
  