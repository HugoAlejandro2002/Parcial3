import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MateriaScreen } from "../screens/home/MateriaScreen";
import { HomeScreen } from "../screens/home/MateriasScreen";


export const ViewMateria = () =>{
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false,
            }}
            initialRouteName="ScreenHome">
            
            <Stack.Screen name = 'ScreenHome' component={HomeScreen}/>     
            <Stack.Screen name = 'EnrollMateria' component={MateriaScreen}/>     
        </Stack.Navigator>
    );
}