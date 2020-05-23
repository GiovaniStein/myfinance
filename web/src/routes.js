import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CreateUser from "./pages/user/CreateUser";
import PrivateRoute from "./components/routes/PrivateRoute";
import {useUserAuth} from './context/AppContext';
import Api from './service/Api';


const Routes = (props) => {


  const [isFinish, setIsFinish] = useState(false);

  const {setUserAuth} = useUserAuth();

  useEffect(() => {
    setIsFinish(false);
    const userAuth = async () => {
      let auth = await Api.UserApi.verifyAuth();
      console.log('routes ', auth);
      setUserAuth(auth);
      setIsFinish(true);
    }
    userAuth();
  }, []);

  if (!isFinish) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={CreateUser} />
        <PrivateRoute path="/home" component={Home} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;