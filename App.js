import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import{ createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
// import Settings from "./Settings";
import Details from "./Details";
const Stack = createNativeStackNavigator(); //a funtion that setups navigation
export default function app(){
   return (
	<NavigationContainer>
		<Stack.Navigator>
	   		<Stack.Screen name="Home" component={Home} />
	   		<Stack.Screen name="Details"component={Details}/>
	   	</Stack.Navigator>
	</NavigationContainer>
	);
}
