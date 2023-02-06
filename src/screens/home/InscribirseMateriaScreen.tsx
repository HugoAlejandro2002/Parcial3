import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Materias } from "../../components/Materias";
import { GettingUser } from "../../components/GettingUser";
import { collection,getDocs} from 'firebase/firestore/lite'
import { db } from "../../services/firebase";
import { Text } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";




export const InscribirseMateriaScreen = (props: any) => {
    const navigation = useNavigation();
    const [materias, setMaterias] = useState([]);

    const queryMaterias = async () => {
        await getDocs(collection(db, '/materias')).then(querySnapshot => {
        const newMaterias = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }));
            setMaterias(newMaterias);
            console.log(materias)
        });
    };
    useEffect(() => {
        queryMaterias();
    }, []);

    const { username='Hugo'} = props;
    return (<>
    <View style={{position:'absolute',zIndex:-1}}>
    </View>
    <View style={{ flex: 1,margin:5, backgroundColor:'#97d3cd',borderRadius:15}}>
        <GettingUser username={username} />
        <Materias materias={materias} />
        {materias.map(materia => console.log(materia))}
    </View>
    </>
    );
};