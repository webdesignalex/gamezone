import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons,AntDesign} from '@expo/vector-icons';
import Header from "../shared/header";


import Home from '../screens/home';
import About from '../screens/about';

const Drawer = createDrawerNavigator()

export default function HomeDrawer(){
    return(
        <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'#eee'}}}>
            <Drawer.Screen 
            name="Home" component={Home}
            options = {({navigation}) => ({
                headerTitle: () => <Header navigation={navigation} title='Home Page'/>,
                drawerIcon:({color,size})=>(<Ionicons name="home" size={size} color={color}/>)

                
            })

            }
                
             />
            <Drawer.Screen options=  {({navigation}) => ({
                headerTitle: () => <Header navigation={navigation} title='About Page'/>,
                drawerIcon:({color,size})=>(<AntDesign name="infocirlceo" size={size} color={color}/>)
                
            })

            }
            
            name="About" component={About} />
        </Drawer.Navigator>
    );
}
