import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./redux/";
import Home from "./screens/Home";

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
