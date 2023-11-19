import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationParamList = {
  Home: undefined;
  Edit: { videoUri: string } | undefined;
};
export type NavigationProp = NativeStackNavigationProp<NavigationParamList>;
