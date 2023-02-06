import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AccountStack } from "./src/navigator/AccountNavigation";
import { MateriasNavigation } from "./src/navigator/MateriasNavigation";
import { HomeScreen } from "./src/screens/home/MateriasScreen";



const App = () => {
  return (
    <NavigationContainer>
      <AccountStack/>
    </NavigationContainer>
  );
};

export default App;
