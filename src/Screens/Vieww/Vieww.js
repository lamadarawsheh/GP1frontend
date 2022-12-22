
import React, {useState} from 'react';
import map from '../../../assets/images/aa.png';
import {Card, Avatar, Title} from 'react-native-paper';
import { View,Text,Image,StyleSheet,ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';

let n="jj";

let g=[];
let t=[];
const onalarm =(name,tybe)=>{
  // shown=true;

  n=name;
  console.log(tybe);

  for (let i=0;i<tybe.length;i++)
  {
    g[i]=tybe[i];
    console.log(g[i]);
  }
  t=g;
  g=[];
  // console.log(n);
  // console.log(t);
     };
     
  
const Vieww=()=>{
  const [shown, setLoading] = useState(false);
  const route = useRoute();
  const b = route.params.b;
  // var nnn=route.params.t1;
  // console.log(nnn);


  

    return (
     
      <ScrollView >
      <View style={styles.root}>
   
      <View  style={{display:route.params.t1, height: 50,
      width: 50,
     alignItems:'center',
       backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '69%',
      left: '26%'} }>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={ () => {onalarm(route.params.Aname,route.params.a); setLoading(!shown); } } ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>1</Text></TouchableOpacity>
 
      </View>
      <View style={{display:route.params.t2, height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '50%',
      left: '10%'} }>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Bname,route.params.Balarmtybe);setLoading(!shown); } } ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>2</Text></TouchableOpacity>
 
      </View>
      <View style={{display:route.params.t3,height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '30%',
      left: '15%'}}>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Cname,route.params.Calarmtybe);setLoading(!shown); }} ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>3</Text></TouchableOpacity>
 
      </View>
      <View style={ {display:route.params.t4,height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '30%',
      left: '35%'
      }}>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Dname,route.params.Dalarmtybe);setLoading(!shown); }} ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>4</Text></TouchableOpacity>
 
      </View>
      <View style={{display:route.params.t5, height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '55%',
      left: '50%'} }>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Ename,route.params.Ealarmtybe);setLoading(!shown); }} ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>5</Text></TouchableOpacity>
 
      </View>
      <View style={{display:route.params.t6,height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '35%',
      left: '54%'}}>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Fname,route.params.Falarmtybe);setLoading(!shown); }} ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>6</Text></TouchableOpacity>
 
      </View>
      <View style={{display:route.params.t7, height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
      backgroundColor: 'red',
        borderRadius:'40',
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '18%',
      left: '78%'} }>
      {/* <Button  title='7' onPress={onalarm} color='black' ></Button> */}
      <TouchableOpacity onPress={() =>{onalarm(route.params.Gname,route.params.Galarmtybe);setLoading(!shown); }} ><Text style={{fontSize:35,color:'white',marginTop:0,fontWeight:'bold'}}>7</Text></TouchableOpacity>
 
      </View>
          <Image source={map} style={[styles.logo]}
           resizeMode="contain" />
          
      
      </View>
     
   { shown && (
      <View>
      <Card>
        <Card.Content>
        <Title style={{
          color:'red',
          fontWeight:'bold',
          fontSize:25

        }}>{n}</Title>
          <View
            // style={{
            //   flexDirection: 'row',
            //   justifyContent: 'space-between',
            //   alignItems: 'center',
            // }}
            >

            {/* <Text style={{textAlignVertical:'center',fontSize:20}}>{t}</Text> */}

            { t.map((item)=>(
         <Text style={{textAlign:'left',marginBottom:5,fontSize:20,fontWeight:'600'}}> { item } </Text>)
         )}
          </View>
        </Card.Content>
      </Card>


      </View>
     ) 
   }
      </ScrollView>
      );
       
    


};



const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding:10,
      
    },
    logo:{
      width: 500,
     height:500,
      
     
    },
    rectangle1: {
 
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '69%',
      left: '26%'
    },
    
    rectangle2: {
      
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '50%',
      left: '10%'
    },
    
    rectangle3: {
     
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '30%',
      left: '15%'
    },
    
    rectangle4: {
     
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '30%',
      left: '35%'
    },
    
    rectangle5: {
      
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '55%',
      left: '50%'
    },
    
    rectangle6: {
      
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '35%',
      left: '54%'
    },
    
    rectangle7: {
      
      height: 50,
      width: 50,
     alignItems:'center',
      //  backgroundColor: 'red',
        
  borderWidth
      :'5',
     borderColor:'red',
      position: 'absolute', 
      zIndex: 99,
      top: '18%',
      left: '78%'
    },
  });
  
export default Vieww;