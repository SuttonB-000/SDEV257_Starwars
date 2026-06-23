import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spaceships from "./spaceships";
import Planets from "./planets";
import Films from "./films";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Films" component={Films} />
        <Tab.Screen name="Spaceships" component={Spaceships} />
        <Tab.Screen name="Planets" component={Planets} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
