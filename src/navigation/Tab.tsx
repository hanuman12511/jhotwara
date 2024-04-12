import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react'
import {Text,View,StyleSheet, Image,Animated,  TouchableOpacity, FlatList,} from 'react-native'
import bikelogo from '../assets/logo.png'
import About from '../screen/About';
import {bike} from '../data/data'
import {Linking} from 'react-native'

const BottomTab = createBottomTabNavigator();

function Tab() {
  const [bikeinfo,setBikeInfo] = useState(bike)
  const [bikemodel,setBikemodel] = useState('')
  const [animation] = useState(new Animated.Value(0));
  const [animation1] = useState(new Animated.Value(0));
  
  const t1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0], // Start from bottom (300) to top (0)
  });
 
  const t2 = animation1.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 0], // Start from bottom (300) to top (0)
  });
 
  
  useEffect(()=>{
    stopanimation()
    stopanimation1()
  },[])
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();

   
  };
 
  const stopanimation=()=>{
    Animated.timing(animation, {
        toValue: 0,
        duration: 500, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
      setBikemodel("")
  }



  const startAnimation1 = (item:any) => {
    Animated.timing(animation1, {
      toValue: 1,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
    setBikemodel(item.model)
  };
 
  const stopanimation1=()=>{
    Animated.timing(animation1, {
        toValue: 0,
        duration: 500, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
      setBikemodel("")
  }
  function HomeScreen(){
  

    return(
        <View style={styles.mainview}>
            <View style={styles.header}>
                    <Text>{'bike'}</Text>
                    
                    <TouchableOpacity onPress={startAnimation}>
                    <Image source={bikelogo} style={styles.bikelogo}/>
                    </TouchableOpacity>
            </View>
      
        </View>
    )
}

  function Call(){
    return(
      Linking.openURL(`tel:${'+919829139264'}`)
    )
  }


  const renderitem=(item:any)=>{
    console.log(item.item);
    
    return(
    <TouchableOpacity  onPress={()=>startAnimation1(item.item)}>
    <View style={ styles.bikeshow1}> 
    <Image source={item.item.img} style={{width:30,height:30}}/>
        <Text>{item.item.name}</Text>
    </View>
    </TouchableOpacity>
      )
  }

  return (
    <>
    <BottomTab.Navigator 
  
        screenOptions={{
          tabBarStyle:{
          backgroundColor:'green',
          position:'absolute',
          marginHorizontal:20,
          marginVertical:1,
          borderRadius:10,
          bottom:10,
          left:0,
          right:0,
          elevation:1,
          zIndex:10
        }
          ,headerShown: false
        }}
       
    >
      <BottomTab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon:()=>(
           <View style={{backgroundColor:'red',width:20,height:30}}></View>
          )
          
        }}/>
        <BottomTab.Screen name={'ab'} component={Call}  options={{
          tabBarLabel: 'About',
          tabBarIcon:()=>(
            <View style={{
              backgroundColor:'red',
              width:60,
              height:60,
              position:'absolute',
              bottom:10,
              borderRadius:100,
              
            }}></View>
          )
          
        }}/>
         <BottomTab.Screen name="add" component={About}  options={{
          tabBarLabel: 'Add',
          tabBarIcon:()=>(
            <View style={{backgroundColor:'red',width:20,height:30}}></View>
          )
          
        }}/>
     
    </BottomTab.Navigator>
   
    <Animated.View style={[styles.bikeshow, {transform: [{ translateY:t1 }]}]}>
    <View style={styles.closeanimation}>
    <Text>Select your Vehicle Brand</Text>
      <TouchableOpacity onPress={stopanimation}>
       <Text>Close</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.innerbikeshowview}>
        
        <FlatList
          data={bikeinfo}
          renderItem={renderitem}
          keyExtractor={index=>index.id}
          numColumns={3}
        />
      </View>
    </Animated.View>


<Animated.View style={[styles.bikeshowmodel, {transform:[ {translateY:t2}] }]}>
    <View style={styles.closeanimation}>
    <Text>Select your model</Text>
      <TouchableOpacity onPress={stopanimation1}>
      <Text>Close</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.innerbikeshowview}>
      <FlatList
          data={bikemodel}
          renderItem={renderitem}
          keyExtractor={index=>index.id}
          numColumns={3}

        />
      </View>
     
      </Animated.View> 
    </>
  );
}
export default Tab


const styles=StyleSheet.create({
  model:{
    width:'100%',height:300,backgroundColor:'blue',position:'absolute',bottom:0,left:0,right:0,zIndex:10
  },
  mainview:{
      flex:1,
      height:100,
      marginHorizontal:20
  },
  header:{
      width:'100%',
      height:70,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
  },
  bikelogo:{width:50,height:40
  },
  bikeshow:{
      width:'100%',
      height:400,
      backgroundColor:'#fff',
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      elevation:20,
      zIndex:20
     },
  bikeshowmodel:{
      width:'100%',
      height:600,
      backgroundColor:'#fff',
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      elevation:20,
      zIndex:30
     },

     innerbikeshowview:{
   
      height:'90%',
      marginVertical:'15%'

     },
     closeanimation:{
      justifyContent:'space-between',
      flexDirection:'row',
      marginHorizontal:20,
      paddingVertical:20
     }
     ,

     bikeshow1:{
      flex:1,
      height:100,
      padding:20,
      borderRadius:20,
    
      alignItems:'center',
      margin:10,
      justifyContent:'space-around'
    }
})