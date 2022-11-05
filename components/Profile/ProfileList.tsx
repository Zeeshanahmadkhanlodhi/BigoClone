import React from "react";
import { View  , StyleSheet} from "react-native";
import ProfileListItem from "./ProfileListItem";


export default function ProfileList(){
    return(
      <View style={styles.ProfileList}>
        <ProfileListItem />


      </View>      
    );
}


const styles = StyleSheet.create({
  ProfileList:{
  
  }
})
