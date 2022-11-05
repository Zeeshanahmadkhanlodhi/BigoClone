import React from "react";
import { View , Text ,StyleSheet ,Image  ,ScrollView } from "react-native";
import { AntDesign ,MaterialCommunityIcons ,MaterialIcons ,FontAwesome ,FontAwesome5 } from '@expo/vector-icons'; 
import ProfileList from "../../components/Profile/ProfileList";



export default function ProfileScreen(){
    return(
        <ScrollView  style={styles.ProfileContainer}>
            <View style={styles.ProfileImageContainer}>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.ProfileImage} />
                <View style={styles.ProfileDescription}>
                    <Text style={styles.ProfileName}>Zeeshan Ahmad</Text>
                    <View style={styles.ProfileAddUser}>
                        <AntDesign name="adduser" size={18} color="white" />
                    </View>
                    <View style={styles.ProfileGender}>
                        <MaterialCommunityIcons name="gender-male" size={18} color="white" />
                    </View>
                    <View style={styles.ProfileLevel}>
                        <Text >LV 01</Text>
                    </View>
                </View>
                <Text style={styles.IDNumber}>ID:251845154584</Text>
            </View>
            <View style={styles.ProfileStatistics}>
                <View style={styles.Friends}>
                    <Text style={styles.Heading}>12K</Text>
                    <Text style={styles.HeadingDescription}>Friends</Text>
                </View>
                <View style={styles.Following}>
                    <Text style={styles.Heading}>45.5k</Text>
                    <Text style={styles.HeadingDescription}>Following</Text>
                </View>
                <View style={styles.Friends}>
                    <Text style={styles.Heading}>455k</Text>
                    <Text style={styles.HeadingDescription}>Fans</Text>
                </View>
                
            </View>
            <View style={styles.Options}>
                <View style={styles.Option}>
                <FontAwesome5 name="hat-cowboy-side" style={styles.icon} size={35} color="#3CCECE"  />
                    <Text style={styles.HeadingDescription}>VIP</Text>
                </View>
                <View style={styles.Option}>
                    <FontAwesome name="group" style={styles.icon}  size={35} color="#3CCECE" />
                    <Text style={styles.HeadingDescription}>Family</Text>
                </View>
                <View style={styles.Option}>
                    <FontAwesome name="money" style={styles.icon}  size={35} color="#3CCECE" />
                    <Text style={styles.HeadingDescription}>Earn Money</Text>
                </View>
                
            </View>
            <ProfileList />
          
       

            
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    ProfileContainer:{

    },
    ProfileImageContainer:{
        alignItems:'center',
        marginTop:30,
    },
    ProfileImage:{
        width:90,
        height:90,
        borderRadius:50,
        borderColor:'#d1bac9',
        borderWidth:1,
        
    },
    ProfileDescription:{
        flexDirection:'row',
        alignItems:'center'
    },
    ProfileName:{
        color:'black',
        fontWeight:'bold',
        fontSize:15,
    },
    ProfileAddUser:{
        backgroundColor:'#0DA3A4',
        
        margin:5,
        padding:3,
        borderRadius:10,
    },
    ProfileGender:{
        backgroundColor:'green',
        margin:5,
        padding:3,
        borderRadius:10,

    },
    ProfileLevel:{
        backgroundColor:'yellow',
        margin:5,
        padding:3,
        borderRadius:10,
       
    },
   
    IDNumber:{
        color:'gray',
    },
    ProfileStatistics:{
        flexDirection:'row',
        justifyContent:'center',      
    },
    Friends:{
        // height:100,
        padding:10,
        margin:10,
     
    },
    Following:{
        padding:10,
        margin:10,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'black',
    },
    Heading:{
        fontSize:26,
        color:'black',
        textAlign:'center'
    },
    HeadingDescription:{
        color:'black',
        textAlign:'center',
    },
    Options:{
        flexDirection:'row',
        justifyContent:'center',
    },
    Option:{
        backgroundColor:'#BCF0F1',
        margin:5,
        width:'25%',
        padding:5,
        borderRadius:10,
       
    },
    icon:{
       
        alignSelf:'center'
    }
   
})