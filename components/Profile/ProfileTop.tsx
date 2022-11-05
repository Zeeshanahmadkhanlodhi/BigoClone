import React from "react";
import { StyleSheet , View ,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



export default function ProfileTop(){
    return(
        <View style={styles.ProfileTop}>
            <Text style={styles.ProfileText}>Me</Text>
            <View style={styles.ProfileIcons}>
                <Ionicons name="settings-outline" size={30} color="white" />
                <AntDesign name="user" size={30} style={{marginLeft:10}} color="white" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    ProfileTop:{
        flexDirection:"row",
        justifyContent:'space-between',
        width:'100%',
    },
    ProfileText:{
        fontSize:26,
        fontWeight:'600',
        color:'white'
    },
    ProfileIcons:{
        flexDirection:'row'
    }

})