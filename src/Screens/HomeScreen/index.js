import React, { Component } from "react";
import { View,Text,StyleSheet,ScrollView  } from "react-native";
import CustomButton from "../../Component/CustomButton/CustomButton";
import Header from "../../Component/Header/Header";
import { useNavigation} from '@react-navigation/native';
import Card from "../../Component/Card";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const HomeScreen =({route})=>{
    const navigation= useNavigation();
    const onStartShiftPressed=()=>{
        navigation.navigate("StartShift");

    };

    const onSchedulePressed=()=>{
let id='406382010';
           fetch("http://localhost:3000/scheduale",{
            method: "post" ,
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-origin":"*",

            },
            body:JSON.stringify({
                id:id ,
                 
             
            }),
        })
        .then(res=>res.json())
        .then((data)=>{

            console.log(data,"employee signin");
           
              //navigation.navigate("Schedule");
               navigation.navigate('Schedule',{
                sun:data.sharrsun,mon:data.sharrmon,tue:data.sharrtue,wed:data.sharrwed,thu:data.sharrthu
               })
            
        });

//sharrsun,sharrmon,sharrtue,sharrwed,sharrthu
     

  };

  const onViewPressed=()=>{
    
   
    fetch("http://localhost:3000/viewalarm",{
      method: "post" ,
      crossDomain:true,
      headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-origin":"*",

      },
      body:JSON.stringify({
          
       
      }),
  })
  .then(res=>res.json())
  .then((data)=>{

      console.log(data,"alarm view");
      let t1='none';
      let t2='none';
      let t3='none';
     let t4='none';
      let t5='none';
      let t6='none';
      let t7='none';
     
      
 for(let i=0;i<data.alarmb.length;i++)
   {
   if(data.alarmb[i]=='A')
   {
   
    t1='flex';
   
   }
   
   else if(data.alarmb[i]=='B')
   {
     t2='flex';
   }
   else if(data.alarmb[i]=='C')
   {
     t3='flex';
   }
   else if(data.alarmb[i]=='D')
   {
     t4='flex';
   }
   else if(data.alarmb[i]=='E')
   {
     t5='flex';
   }
   else if(data.alarmb[i]=='F')
   {
     t6='flex';
   }
   else if(data.alarmb[i]=='G')
   {
     t7='flex';
   }
   
   }
 
   console.log(t1);
   console.log(t2);
   console.log(t3);
   console.log(t4);
   console.log(t5);
   console.log(t6);
   console.log(t7);
   
   

  //  console.log(data.Aalarmtybe);
        //navigation.navigate("Schedule");
        // sun:data.sharrsun,mon:data.sharrmon,tue:data.sharrtue,wed:data.sharrwed,thu:data.sharrthu
         navigation.navigate('Vieww',{
         b:data.alarmb,t1,t2,t3,t4,t5,t6,t7,Aname:data.Aname,a:data.Aalarmtybe,Bname:data.Bname,Balarmtybe:data.Balarmtybe,Cname:data.Cname,Calarmtybe:data.Calarmtybe,Dname:data.Dname,Dalarmtybe:data.Dalarmtybe,Ename:data.Ename,Ealarmtybe:data.Ealarmtybe,Fname:data.Fname,Falarmtybe:data.Falarmtybe,Gname:data.Gname,Galarmtybe:data.Galarmtybe
         })
      
  });



};

const onabsencePressed=()=>{
  navigation.navigate("Absence");

};

const onAlarmPressed=()=>{
  navigation.navigate("Alarm");

};

const onlostpakegePressed=()=>{
  navigation.navigate("Lostpakege");

};

const onProfilePressed=()=>{
  navigation.navigate("Profile");

};






  

return(
  


<ScrollView  >
<Header/>
<View style={styles.root} >

  {/*<Text style={{fontSize:26,backgroundColor:'#fff',color:'#000'}}> {route.params.paramKey}  </Text>*/ }


        <View style={styles.firstrow}>
            <View style={styles.first}>
            <Card>
            <AntDesign name="clockcircleo" size={30} color="#0066ff" />
            <CustomButton text="Start Shift" type="SECONDARY"  bgColor="#FFF" onPress={onStartShiftPressed}
             fgColor="#000000"/> 
            </Card>
            </View>
          <View style={styles.second}>
          <Card>
               <AntDesign name="table" size={30} color="#0066ff" />
                <CustomButton text="Schedule" type="SECONDARY"  bgColor="#FFF"  onPress={onSchedulePressed}
                 fgColor="#000000" />
                </Card>
          </View>
         
       
        </View>

   <View style={styles.secondrow}>
    <View style={styles.first}>
    <Card>
    <Ionicons name="ios-person-outline" size={30} color="#0066ff" />
    <CustomButton text="Profile" type="SECONDARY" bgColor="#FFF"  onPress={onProfilePressed}
             fgColor="#000000" /> 
    </Card>
    </View>
 <View style={styles.second}>
 <Card>
 <MaterialCommunityIcons name="view-dashboard-variant" size={30} color="#0066ff"   />
   <CustomButton text=" View" type="SECONDARY" bgColor="#FFF" onPress={onViewPressed}
             fgColor="#000000" />
   </Card>
 </View>
  
    
   </View>
<View style={styles.thirdrow}>
    <View style={styles.first} >
    <Card>
    <SimpleLineIcons name="bag" size={30} color="#0066ff" />
    <CustomButton text="lost pakege" type="SECONDARY"  bgColor="#FFF" onPress={onlostpakegePressed}
             fgColor="#000000"/>
    </Card>
    </View>
  <View style={styles.second} >
  <Card>
  <MaterialCommunityIcons name="alarm-light" size={30} color="#0066ff" />
<CustomButton text="Alarm " type="SECONDARY" bgColor="#FFF"  onPress={onAlarmPressed}
         fgColor="#000000"/>
</Card>
  </View>

   

</View>
  <View style={styles.thirdrow}>
            <View style={styles.first}>
            <Card>
            <AntDesign name="clockcircleo" size={30} color="#0066ff" />
            <CustomButton text="Absence Form" type="SECONDARY"  bgColor="#FFF" onPress={onabsencePressed}
             fgColor="#000000"/> 
            </Card>
            </View>
        
         
       
        </View>

        </View>
        </ScrollView>
   
 
    
);

};




const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding:10,
      
    },
    container: {
        flex:1,
        backgroundColor:'#fff',
       //justifyContent: 'space-between',
        marginTop:-170,
        
      
      

},
firstrow: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems:'center',
     },

    first:{
      flex:1,
     width: 200,
     height:200,

     
    },

    second:{
      flex:1,
        width: 200,
        height:200 },
    secondrow: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: 'space-between'
    },
    thirdrow: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: 'space-between'
    },
});
 
export default HomeScreen;