import Register from './components/Register'
import Login from './components/Login'
import Tab4 from './components/TabNavi'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

