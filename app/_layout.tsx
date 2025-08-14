import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./index";
import Formulario from "./formulario";
import Produto from "./produto";

const Tabs = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function HomeTabs() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs.Navigator
        screenOptions={{ headerShown: false, tabBarIcon: () => null }}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Formulário" component={Formulario} />
        <Tabs.Screen name="Produto" component={Produto} />
      </Tabs.Navigator>
    </QueryClientProvider>
  );
}
