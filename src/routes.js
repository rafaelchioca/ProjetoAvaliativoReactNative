import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from  "./pages/login";
import Main from  "./pages/main";
import Register from  "./pages/register";
import Character from  "./pages/character";



const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{
                    title: "LOGIN",
                    headerTitleAlign: "center",
                    headerStyle:{
                        backgroundColor: "#B8D433"
                    },
                    headerTitleStyle:{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "#00AEC2",
                        textShadowColor:  "#135D5C",
                        textShadowOffset: { width: 1.5, height: 1 },
                        textShadowRadius: 2

                    }
                }}/>

                <Stack.Screen name="main" component={Main} options={{
                    title: "RICK AND MORTY API",
                    headerTitleAlign: "center",
                    headerLeft: null,
                    headerStyle:{
                        backgroundColor: "#B8D433"
                    },
                    headerTitleStyle:{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "#00AEC2",
                        textShadowColor:  "#135D5C",
                        textShadowOffset: { width: 1.5, height: 1 },
                        textShadowRadius: 2

                    }
                }}/>

                <Stack.Screen name="register" component={Register} options={{
                    title: "CADASTRO",
                    headerTitleAlign: "center",
                    headerTintColor: "#212121",
                    headerStyle:{
                        backgroundColor: "#B8D433"
                    },
                    headerTitleStyle:{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "#00AEC2",
                        textShadowColor:  "#135D5C",
                        textShadowOffset: { width: 1.5, height: 1 },
                        textShadowRadius: 2

                    }
                }}/>

                <Stack.Screen name="character" component={Character} options={{
                    title: "MAIS DETALHES",
                    headerTitleAlign: "center",
                    headerTintColor: "#212121",
                    headerStyle:{
                        backgroundColor: "#B8D433"
                    },
                    headerTitleStyle:{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "#00AEC2",
                        textShadowColor:  "#135D5C",
                        textShadowOffset: { width: 1.5, height: 1 },
                        textShadowRadius: 2

                    }
                }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}