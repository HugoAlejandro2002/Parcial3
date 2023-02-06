import React from "react";
import { StyleSheet, Text, TextInput, View,  TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


export const GettingUser = (props: any) => {
    const { username = 'Hugo'} = props
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:'space-between', padding:20}}>
            <View>
                <Text style={{ fontSize: 30, fontWeight:'bold'}}>Hi, {username}</Text>
                <Text style={{ fontSize: 12 }}>Let's start learning!</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity>
                <Icon name="cart-outline" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="notifications-outline" size={32} />
            </TouchableOpacity>
            </View>
        </View>
        <View style={{paddingHorizontal:15, marginBottom:15}}>
            <View style={{flexDirection: 'row',alignItems:'center', borderRadius:15, backgroundColor:'white',paddingLeft:10}}>
                <Icon name="ios-search" size={16} color='gray'/>
                <TextInput
                    placeholder="Search for anything"
                    style={{ padding: 10 }}
                    placeholderTextColor='gray'
                />
            </View>
        </View>
    
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'red',
        borderRadius: 15, 
        height:150,
        justifyContent:'space-around',
    },
    
})