import React from 'react'
import "../index.css";
//Transition between components
import { CSSTransition, TransitionGroup } from "react-transition-group";
//To move between components
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
//Import components
import Register from "../page/Register";
import Error from "../page/Error";
import Login from "../page/Login";
import ShoppingPage from "../page/ShoppingPage";
//Protected route function - to secure route.
import PrivateRoute from "./PrivateRoute";

function App() {
  //Location need to create individual key
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition timeout={1000} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Redirect from="/" to="/register" exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          {/*Private route*/}
          <PrivateRoute path="/shopping/user" component={ShoppingPage} exact />
          <Route
            path="*"
            render={(props) => {
              return (
                <Error {...props} text="Ooops wrong way, please go back" />
              );
            }}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
