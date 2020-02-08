import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CreateUser from "./pages/user/CreateUser";

/* const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  ); */
  
  const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={CreateUser} />
        <Route path="/home" component={Home} />
        {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;