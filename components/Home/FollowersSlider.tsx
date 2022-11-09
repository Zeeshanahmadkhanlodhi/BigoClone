import React from 'react';
import { View ,StyleSheet ,ScrollView, Text,Image ,Pressable } from 'react-native';

export default function FollowerSlider(){
    return(
        <View>
            <Text style={styles.SliderText}>They are Wating for you.</Text>
            <ScrollView 
            horizontal={true} 
            style={styles.FollowerSlider}  
            showsHorizontalScrollIndicator={false}  >
            <View style={styles.ProfileTOFollow}>
                <View>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.UserImage} />
                </View>
                <View style={styles.ProfileTOFollowText}> 
                <Text style={styles.UserName}>Zeeshan Ahmad</Text>
                <Text>Lorem, ipsum dolor sit</Text>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.ProfileTOFollow}>
                <View>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.UserImage} />
                </View>
                <View style={styles.ProfileTOFollowText}> 
                <Text style={styles.UserName}>Zeeshan Ahmad</Text>
                <Text>Lorem, ipsum dolor sit</Text>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.ProfileTOFollow}>
                <View>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.UserImage} />
                </View>
                <View style={styles.ProfileTOFollowText}> 
                <Text style={styles.UserName}>Zeeshan Ahmad</Text>
                <Text>Lorem, ipsum dolor sit</Text>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.ProfileTOFollow}>
                <View>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.UserImage} />
                </View>
                <View style={styles.ProfileTOFollowText}> 
                <Text style={styles.UserName}>Zeeshan Ahmad</Text>
                <Text >Lorem, ipsum dolor sit</Text>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                </View>
            </View>
            <View style={styles.ProfileTOFollow}>
                <View>
                <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.UserImage} />
                </View>
                <View style={styles.ProfileTOFollowText}> 
                <Text style={styles.UserName}>Zeeshan Ahmad</Text>
                <Text>Lorem, ipsum dolor sit</Text>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    SliderText:{
        padding:10,
        fontWeight:'500',
        fontSize:17,
      
      },
      UserImage:{
        width:100,
        height:100,
        borderRadius:10,
      },
      UserName:{
        fontSize:16,
      },
      ProfileTOFollow:{
        backgroundColor:'#F66A8D',
        margin:10,
        width:300,
        flexDirection:'row',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
    
        elevation: 5,
      },
      FollowerSlider:{
        margin:10,
      },
      ProfileTOFollowText:{
        padding:10,
      },
      ProfileTOFollowIcon:{
        width:50,
        padding:5,
        backgroundColor:'#C1F99B',
      },
      button:{
        backgroundColor:'#E0DFDF',
        width:60,
        borderRadius:5,
        marginTop:10,
      },
      buttonText:{
        padding:5,
      },
})