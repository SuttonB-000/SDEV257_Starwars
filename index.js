import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spaceships from "./Spaceships";
import Planets from "./Planets";
import Films from "./Films";

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
