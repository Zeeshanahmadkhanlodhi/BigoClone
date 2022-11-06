/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome ,Ionicons   ,MaterialCommunityIcons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/ExploreScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ProfileTop from '../components/Profile/ProfileTop';
import HomeTop from '../components/Home/HomeTop';
import ExploreTop from '../components/Explore/ExploreTop';
import BarTop from '../components/Bar/BarTop';
import CameraScreen from '../screens/CameraScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          title: 'Home',
          headerTitle:HomeTop,
          headerStyle:{
            backgroundColor:'#F56388',
            height:80,
       
          },
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
     
       <BottomTab.Screen
        name="Explore"
        component={TabTwoScreen}
        options={{
          title: 'Explore',
          headerTitle:ExploreTop,
          headerStyle:{
            backgroundColor:'#F56388',
            height:80,
          },
          tabBarIcon: ({ color }) => <Ionicons name="earth" size={24} color="black" />,
        }}
      />
       <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: 'Camera',
          headerShown:false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="camera-iris"  size={35} color="#F56388" />,
        }}
      />
      <BottomTab.Screen
        name="Bar"
        component={TabTwoScreen}
        options={{
          title: 'Bar',
          headerTitle:BarTop,
          headerStyle:{
            backgroundColor:'#F56388',
            height:80,
          },
          tabBarIcon: ({ color }) => <FontAwesome name="star" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title:'Me',
          headerTitle:ProfileTop,
          headerStyle:{
            backgroundColor:'#F56388',
            height:90,
          },
          tabBarIcon: ({ color }) => <FontAwesome name="user-circle" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
