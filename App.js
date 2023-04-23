import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile';
import TabNavi from './components/TabNavi'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/Home';


export default function App() {
  
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <stack.Screen options={{ headerShown: false }} name="TabNavi" component={TabNavi} />
        <stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

