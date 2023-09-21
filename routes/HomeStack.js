import ReviewDetails from "../screens/reviewDetails";
import HomeDrawer from "./HomeDrawer";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../shared/header";

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeDrawer} />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        // options={({navigation}) => ({
        //     headerTitle: () => <Header navigation={navigation} title='Review Details'/>,
        //     headerShown:true

        // })}
        options={{ headerShown: true,headerTitle :() =><Header title="Review Details"/> }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
