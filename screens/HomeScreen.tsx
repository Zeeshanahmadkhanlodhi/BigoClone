import { ScrollView, StyleSheet ,Image ,Button ,Pressable  } from 'react-native';
import { AntDesign ,EvilIcons } from '@expo/vector-icons'; 

import { Text, View } from 'react-native';
import FollowerSlider from '../components/Home/FollowersSlider';
import BroadCastBox from '../components/Home/BroadCastBox';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.followText}>Follows</Text>
          <Text style={styles.allText}>All</Text>
        </View> 
        <View>
          <AntDesign name="filter" size={24} color="black" />
        </View>
      </View>
      <ScrollView  style={styles.ScrollerContainer} >
        <FollowerSlider />
        <BroadCastBox />
        <BroadCastBox />
        <BroadCastBox />

       
       
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  header:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  leftHeader:{
    flexDirection:'row',
  },
  followText:{
    padding:5,
    margin:5,
    backgroundColor:'#F56388',
    color:'#F9F6F9',
  },
  allText:{
    padding:5,
    margin:5,
    backgroundColor:'#F56388',
    color:'#F9F6F9',

  },
  ScrollerContainer:{
    marginBottom:30,
  }

 
  
});
