import React, { useState } from 'react'
import {Text,View,StyleSheet, Image,Animated,  TouchableOpacity,} from 'react-native'
 import bikelogo from '../assets/logo.png'
export default function HomeScreen(){
    const [animation] = useState(new Animated.Value(0));

    const startAnimation = () => {
        Animated.timing(animation, {
          toValue: 1,
          duration: 500, // Adjust duration as needed
          useNativeDriver: true,
        }).start();
      };
      const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [400, 0], // Start from bottom (300) to top (0)
      });
      const stopanimation=()=>{
        Animated.timing(animation, {
            toValue: 0,
            duration: 500, // Adjust duration as needed
            useNativeDriver: true,
          }).start();

      }
    return(
        <View style={styles.mainview}>
            <View style={styles.header}>
                    <Text>{'bike'}</Text>
                    
                    <TouchableOpacity onPress={startAnimation}>
                    <Image source={bikelogo} style={styles.bikelogo}/>
                    </TouchableOpacity>
            </View>
            <Animated.View style={[styles.bikeshow, {transform: [{ translateY }]}]}>
                <View style={styles.innerbikeshowview}>

                </View>
                <View style={styles.closeanimation}>
                    <TouchableOpacity onPress={stopanimation}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

const styles=StyleSheet.create({
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
        bottom:10,
        left:0,
        right:0,
        borderRadius:20,
        elevation:20,
        zIndex:20
       },
       innerbikeshowview:{
        backgroundColor:'yellow',
        height:'70%',
        marginVertical:'15%'

       },
       closeanimation:{
        position:'absolute',
        right:10,
        top:10
       }

})