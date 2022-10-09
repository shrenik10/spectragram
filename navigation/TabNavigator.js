import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CreateBottomNavigator from 'navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { someSeries } from 'async';
import createMaterialBottomTabNavigator from '@react-navigation/material-bottom-tabs';


const Tab = createBottomNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        labeled ={false}
        barStyle={styles.bottomtabStyle}
        ScreenOptions={({ route }) => ({
            tabBarIcon: ({ focused,color,size}) => {
                let iconName;
                if(route.name === 'Feed'){
                    iconeName = focused
                    ? 'book'
                    : 'book-outline'
                } else if (route.name === 'CreatePost') {
                    iconName = focuse ? 'create' : 'create-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}

        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColr:'grey'
        }}

        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={Createpost}/>

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});


export default BottomTabNavigator