import React from "react";
import ReactDOM from "react-dom";

import AppNavigator from './Routes'

import {ChakraProvider} from '@chakra-ui/react'
class App extends React.Component {
  render() {
    return (
    <ChakraProvider>
      <AppNavigator />
    </ChakraProvider>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
