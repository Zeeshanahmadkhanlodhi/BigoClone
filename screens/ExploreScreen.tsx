import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Text, View } from '../components/Themed';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.CountriesContainer}>
          <View style={styles.CountriesHeader}>
            <Text style={styles.CountiesHeaderLeft}>Countries & Region</Text>
            <View style={styles.CountiesHeaderRight}>
                <Text>More</Text>
                <Ionicons name="chevron-forward-sharp" size={24} color="black" />
            </View>
          </View>
          <View style={styles.CountiesBody}>

          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{},
  CountriesContainer:{
    margin:10,
  },
  CountriesHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  CountiesHeaderLeft:{
    fontSize:16,
  },
  CountiesHeaderRight:{
    flexDirection:"row",
    alignItems:'center'
  },
  CountiesBody:{},
});
