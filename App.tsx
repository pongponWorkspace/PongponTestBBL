import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from './screens/todo-list/todo-list-screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  TodoListScreen: undefined;
}

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={'TodoListScreen'}>
        <RootStack.Screen
          name={'TodoListScreen'}
          component={TodoListScreen}
          options={{
            title: 'To-Do List',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default App;