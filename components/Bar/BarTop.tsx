import React from "react"
import { View ,StyleSheet ,Text ,ScrollView  } from "react-native";
import { Feather ,FontAwesome ,MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function BarTop(){
    return(
        <View style={styles.Container}>
            <ScrollView  
                horizontal={true}  
                showsHorizontalScrollIndicator={false} 
                style={styles.MenuItems}>
                <Text style={styles.MenuItem}>Follows</Text>
                <Text style={styles.MenuItem}>Hot</Text>
                <Text style={styles.MenuItem}>Community</Text>
                <Text style={styles.MenuItem}>Muslim</Text>

            </ScrollView >
            <View style={styles.MenuIcons}>
                <Feather name="search" size={20} style={styles.MenuIcon} color="white" />
                <MaterialCommunityIcons name="message-outline" size={20} style={styles.MenuIcon} color="white" />
                <FontAwesome name="pencil-square-o" size={20} style={styles.MenuIcon} color="white" />
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