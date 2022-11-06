import React from "react"
import { View ,StyleSheet ,Text ,ScrollView  } from "react-native";
import { Feather ,Ionicons } from '@expo/vector-icons'; 


export default function HomeTop(){
    return(
        <View style={styles.Container}>
            <ScrollView  horizontal={true} style={styles.MenuItems}>
                <Text style={styles.MenuItem}>Nearby</Text>
                <Text style={styles.MenuItem}>Popular</Text>
                <Text style={styles.MenuItem}>Chat</Text>
                <Text style={styles.MenuItem}>Games</Text>
            </ScrollView >
            <View style={styles.MenuIcons}>
                <Feather name="search" size={20} style={styles.MenuIcon} color="white" />
                <Ionicons name="notifications-outline" size={20} style={styles.MenuIcon} color="white" />
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
    },
    MenuItems:{
        flexDirection:'row',
    },
    MenuItem:{
        fontSize:20,
        paddingLeft:5,
        paddingRight:5,
        color:'white'
    },
    MenuIcons:{
        flexDirection:'row',
    },
    MenuIcon:{
        paddingLeft:5,
        paddingRight:5,
    }
})