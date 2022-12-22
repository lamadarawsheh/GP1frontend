import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInscreen from '../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../Screens/SignUP/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';
import FirstScreen from "../Screens/FirstScreen/FirstScreen";
import HomeScreen from "../Screens/HomeScreen";
import Work from "../Screens/Work/Work";
import StartShift from "../Screens/StartShiftScreen/StartShift";
import Schedule from "../Screens/Schedule/Schedule";
import Vieww from "../Screens/Vieww/Vieww";
import Alarm from "../Screens/Alarm/Alarm";
import Lostpakege from "../Screens/Lostpakege/Lostpakege";
import Profile from "../Screens/Profile/Profile";
import Absence from "../Screens/Absence/Absence";


const Stack = createNativeStackNavigator();
const Navigation=()=>{
return(
<NavigationContainer>
    <Stack.Navigator   >
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="SignIn" component={SignInscreen} options={{title:"" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Lostpakege" component={Lostpakege}options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Alarm" component={Alarm}options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Vieww" component={Vieww}options={{title:"View Current Alarms" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Profile" component={Profile}options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Schedule" component={Schedule}options={{title:" Your weekly Schedule" , headerBackTitleVisible:false}} />
        <Stack.Screen name="StartShift" component={StartShift}  options={{title:"" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="Absence" component={Absence}  options={{title:"Absence Form" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{title:"" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title:"" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{title:"" , headerBackTitleVisible:false}} />
        <Stack.Screen name="Work" component={Work} options={{title:"" , headerBackTitleVisible:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"" , headerBackTitleVisible:false}} />
    </Stack.Navigator>
</NavigationContainer>

);
};

export default Navigation; 