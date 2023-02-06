import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../themes/global";


export const Materia = (props: any) => {
    const { Name='ARte', Teacher='Alexis', Price='100$', image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png` } = props;
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate('EnrollMateria')}>
        <View style={styles.containerCard}>
          <Image source={{uri:image}} style={styles.imageStyle} />
          <View style={{justifyContent:'flex-start'}}>
            <Text style={{ fontSize: 20, color:'grey', fontWeight:'bold'}}>{Name}</Text>
            <Text style={globalStyles.contentText}>{Teacher}</Text>
          </View>
          <View style={styles.detailsPrice}>
            <Text style={ globalStyles.contentText}>{Price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    containerCard:{
      borderRadius:15, 
      margin: 5, 
      backgroundColor:'white', 
      padding:5,
      width:200,
    },
    detailsPrice:{
      flexDirection:'row', 
      justifyContent:'space-between'
    },
    imageStyle:{ 
      width: 150, 
      height: 150,
       alignSelf:'flex-end'
    }
    
})