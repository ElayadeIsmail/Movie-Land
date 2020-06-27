import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import store from "./redux/store";
import HomeFotter from "./components/home-footer/HomeFotter";
import HomePage from "./pages/homePage/HomePage";
// import Movie from "./components/movie/Movie";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
      <HomeFotter />
    </Provider>
  );
}

export default App;
