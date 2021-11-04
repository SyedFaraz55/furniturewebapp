import { action, createStore } from "easy-peasy";

const store = createStore({
  user: {},
  orders: [],
  setUser: action((state, payload) => {
    state.user = payload;
  }),
});

export default store;
