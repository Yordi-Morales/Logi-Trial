import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "./screens/UsersList";
import UserDetails from "./screens/UserDetail"; // Un ejemplo de otra pantalla
import Colors from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UsersList"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.info,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="UsersList"
          component={UsersList}
          options={{
            title: "Lista de Usuarios",
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetails}
          options={{
            title: "Detalles del Usuario",
            headerRight: () => (
              <Ionicons
                name="person"
                size={25}
                color="white"
                style={{ marginRight:30 }} 
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
