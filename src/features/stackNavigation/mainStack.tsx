import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList } from './types';
import Home from '../Home';
import EditVideo from '../video/edit/EditVideo';

const Stack = createNativeStackNavigator<NavigationParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Edit'} component={EditVideo} />
    </Stack.Navigator>
  );
};

export default MainStack;
