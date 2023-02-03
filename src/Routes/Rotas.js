import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from '../screens/Login'
import Home from '../screens/Home';
import Adicionar from '../screens/Adicionar';

const Stack = createNativeStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen options={{ headerShown: false }} name="Add" component={Adicionar}/>
        </Stack.Navigator>
    )
}

export default function Rotas() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}