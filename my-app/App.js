import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREEN } from "./src/assets/screenname";

import BasicBarChart from "./src/graphs/barCharts/BarChartBasic";

const Stack = createNativeStackNavigator();
import { useFonts } from 'expo-font';
const App = () => {
  const [loaded]=useFonts({
    'Virgil':require('./src/assets/fonts/Virgil.ttf'),})
  if(!loaded){
    return null
  }
  
  return (
    <NavigationContainer >
      <Stack.Navigator>
        
       
        <Stack.Screen
          name={SCREEN.BASIC_BAR_GRAPH}
          component={BasicBarChart}
          options={{ title: SCREEN.BASIC_BAR_GRAPH }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
