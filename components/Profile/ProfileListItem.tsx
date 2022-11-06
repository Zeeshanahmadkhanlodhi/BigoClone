import React from "react";
import { View ,StyleSheet, Text } from "react-native";
import { Feather ,AntDesign ,Octicons ,Entypo ,FontAwesome ,MaterialIcons ,MaterialCommunityIcons ,FontAwesome5 } from '@expo/vector-icons'; 


export default function ProfileListItem() {
    return (
      <View style={styles.ItemsList}>
        <View style={styles.Items}>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialCommunityIcons name="police-badge" style={styles.icon}  size={25} color="green" />
                    <Text>VIP</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialIcons name="family-restroom" style={styles.icon} size={25} color="purple"  />
                    <Text>Family</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <FontAwesome5 name="money-bill-alt" style={styles.icon} size={25} color="purple" />
                    <Text>Earn Money</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
           
        </View>
        <View style={styles.Items}>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                <Entypo name="message" size={30} color="green"  style={styles.icon}  />
                    <Text>Message</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <AntDesign name="wallet" style={styles.icon} size={25} color="purple" />
                    <Text>Wallet</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <Entypo name="shopping-bag" style={styles.icon} size={25} color="red" />
                    <Text>Item Bag</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialIcons name="post-add" style={styles.icon} size={24} color="pink" />
                    <Text>My Post</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
        </View>
        <View style={styles.Items}>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <FontAwesome5 name="tasks"  style={styles.icon}   size={25} color="gray" />
                    <Text>Task Center</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialIcons name="local-activity" style={styles.icon} size={25} color="#3330e4" />
                    <Text>Activities</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialCommunityIcons name="police-badge"  style={styles.icon} size={25} color="#f637ec" />
                    <Text>Level</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <FontAwesome name="group" style={styles.icon} size={25} color="#fbb454" />
                    <Text>Fans Group</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <Octicons name="milestone" style={styles.icon} size={25} color="#6c7b95" />
                    <Text>Ranking</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
        </View>
        <View style={styles.Items}>
            
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialCommunityIcons name="barley" style={styles.icon} size={25} color="#464159" />
                    <Text>Creator Center</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <MaterialIcons name="feedback"  style={styles.icon} size={25} color="#8e3343" />
                    <Text>Feedback</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
            <View style={styles.Item}>
                <View style={styles.ItemLeft}>
                    <AntDesign name="facebook-square" style={styles.icon} size={25} color="#19d3da"/>
                    <Text>Like Us on Facebook</Text>
                </View>
            <AntDesign name="right" size={24} color="black" />        
            </View>
        </View>
      </View>
        
    );
}


const styles = StyleSheet.create({
    ItemsList:{},
    Items:{
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,
    },
    Item:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:4,
        alignItems:'center',
    },
    ItemLeft:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        borderRadius:100,
        padding:5,
        margin:5,
    
    }

})