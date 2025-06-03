import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSwitch from '../screens/RoleSwitch';
import ApplicantScreen from '../screens/ApplicantScreen';  // Экран соискателя
import EmployerScreen from '../screens/EmployerScreen';    // Экран работодателя

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleSwitch" component={RoleSwitch} />
        <Stack.Screen name="ApplicantScreen" component={ApplicantScreen} />
        <Stack.Screen name="EmployerScreen" component={EmployerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
