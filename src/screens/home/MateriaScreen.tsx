import React from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';

import {v4 as uuidv4} from 'uuid';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore/lite';



export const MateriaScreen = (props:any) => {
    const { Name='ARte', Teacher='Alexis', Price='100$', image=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png` } = props;
    
    const registermaterias = async () => {
      console.log('enter login');
      try {
        console.log('aait', db);
        const id = uuidv4();
        console.log(id);
        await setDoc(doc(db, '/materiasinscritas', id), {
          Name,
          Teacher,
          Price,
          id,
        });
  
        console.log('Document written with ID: ');
      } catch (e) {
        console.log('Error adding document: ', e);
      }
    };
    return (
        <Card>
          <Card.Title>{Name}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:image,
            }}
          />
          <Text style={{ marginBottom: 10 }}>
           con: {Teacher}
          </Text>
          <Text style={{ marginBottom: 10 }}>
           a: {Price}
          </Text>
          <Button
            buttonStyle={{
                backgroundColor: 'red',
                borderRadius: 20,
            }}
            title="Enroll Now"
            onPress={() => {registermaterias}}
          />
        </Card>);
}