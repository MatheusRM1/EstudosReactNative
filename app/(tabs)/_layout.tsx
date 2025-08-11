import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false, title: "Home" }} />
            <Tabs.Screen name="formulario" options={{ headerShown: false, title: "Formulário" }} />
            <Tabs.Screen name="produto" options={{ headerShown: false, title: "Produto" }} />
        </Tabs>
    )
}