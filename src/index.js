import React from "react";
import ReactDOM from "react-dom";

import AppNavigator from "./Routes";
import firbase from "./config/firebase";
import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import store from "./store";
class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <ChakraProvider>
          <AppNavigator />
        </ChakraProvider>
      </StoreProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
