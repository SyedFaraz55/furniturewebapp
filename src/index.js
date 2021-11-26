import React from "react";
import ReactDOM from "react-dom";

import AppNavigator from "./Routes";

import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import { CartProvider } from "react-use-cart";
import { StripeProvider } from "react-stripe-elements";

class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <CartProvider>
          <ChakraProvider>
            <AppNavigator />
          </ChakraProvider>
        </CartProvider>
      </StoreProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
