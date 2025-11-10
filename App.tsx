import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './views/features/Home/screen/Homepage';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import Editpage from './views/features/Edit/screen/Editpage';
import { GlobalProvider } from './context/GlobalContext';
import TaskEditScreen from './views/features/TaskEdit/screen/TaskEditScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <GlobalProvider>
          <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeMenu' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeMenu' component={Homepage} />
            <Stack.Screen name='EditMenu' component={Editpage} />
            <Stack.Screen name='ChangeMenu' component={TaskEditScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
        </GlobalProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
