import React from "react";
import SignIn from "./pages/SignIn/SignIn";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  // return <BottomTabNavigation />;
  // return <DrawerNavigation />;
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
};

export default App;
