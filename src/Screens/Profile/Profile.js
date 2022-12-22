import React, { Component } from "react";
import { View,Text,StyleSheet  } from "react-native";
import {Avatar,Title,caption,TouchableRipple} from 'react-native-paper';
import pp from '../../../assets/images/PP.png';
import Logo from '../../../assets/images/Logoo.png';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile=()=>{
    const navigation= useNavigation();
return(

<View style={styles.container}>
 <View style={styles.userInfoSection}>
    <View style={{marginLeft:290}}>
    <MaterialCommunityIcons.Button
                name="account-edit"
                size={45}
                backgroundColor='#FFF'
                color='#005c99'
                onPress={() => navigation.navigate('Alarm')}
                />
    </View>

  <View style={{flexDirection:'column',marginTop:40,alignItems:'center'}}>
    <Avatar.Image
    source={pp}

    size={200}
 />

 <Text style={styles.title}> Hanan Darawshe </Text>



    
  </View>


 </View>
<View  style={styles.userInfoSection} >
<View style={styles.row}>
          <Feather name="phone" size={40} color="#777777" />
          <Text style={{color:"#777777", marginLeft: 20,fontSize:30}}>+91-900000009</Text>
        </View>

        <View style={styles.row}>
        <MaterialIcons name="email" size={40} color="#777777" />
          <Text style={{color:"#777777", marginLeft: 20,fontSize:30}}>john_doe@email.com</Text>
        </View>

      
      

</View>



</View>

);


};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      shadowColor:'#fff',
      elevation:0
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
export default Profile;