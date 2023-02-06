import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Materia } from "./Materia";
import { globalStyles } from "../themes/global";


export const Materias = (props: any) => {
    const {materias,navigation} = props
    // const courses = [ { id:'1',title:'Arte de Politicas', teacher:'Alexis', price:'100$', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }, {id:'2', title:'ARte', teacher:'Alexis', price:'100$', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'  }]
    return (
      <View>
        <View style={globalStyles.titleSection}>
          <Text style={globalStyles.titles}>Popular Courses</Text>
          <Text style={{ fontSize: 16 }}>See all</Text>
        </View>
        <FlatList
          data={materias}
          renderItem={({ item }) => <Materia {...item}  />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
