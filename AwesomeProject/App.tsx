/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useReducer } from 'react';
import { Button, Text, View } from 'react-native';
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return "Unrecognized command";
  }
}
const initialState = { count: 0 };
function App(): React.JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  }
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  }
  return (
    <View>
      <Text>Count:{state.count}</Text>
      <Button title='Increment' onPress={()=>{
        handleIncrement()
        }}></Button>
      <Button title='Decrement' onPress={()=>{
        handleDecrement()
        }}></Button>
    </View>
  );
}

export default App;
