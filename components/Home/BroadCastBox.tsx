import React from 'react';
import { View ,StyleSheet,Text ,Image} from 'react-native';
import {  EvilIcons } from '@expo/vector-icons'; 

export default function BroadCastBox(){
    return (
        <View style={styles.BroadCasts}>
        <View style={styles.BroadCastItem}>
          <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.broadcastImage}/>
          <Text style={styles.BroadCastItemTitle}>Kiran Khan (KK)</Text>
          <View style={styles.footer}>
            <EvilIcons name="location" size={18} color="black" />
            <Text style={styles.BroadCastItemLocation}>Karachi</Text>
          </View>
 
        </View>
        <View style={styles.BroadCastItem}>
          <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.broadcastImage}/>
          <Text style={styles.BroadCastItemTitle}>Kiran Khan (KK)</Text>
          <View style={styles.footer}>
            <EvilIcons name="location" size={18} color="black" />
            <Text style={styles.BroadCastItemLocation}>Karachi</Text>
          </View>
 
        </View>        
      </View>
    );
}

const styles = StyleSheet.create({
    BroadCasts:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:10,
      },
      BroadCastItem:{
        backgroundColor:'white',
        padding:8,
        borderRadius:10,
      },
      broadcastImage:{
        width:160,
        height:160,
        borderRadius:10,
        marginBottom:10,
      },
      BroadCastItemTitle:{
        fontWeight:'700',
        fontSize:14,
      },
      footer:{
        flexDirection:'row',
        alignItems:'center',
      },
    
      BroadCastItemLocation:{
        fontSize:10,
      },
})