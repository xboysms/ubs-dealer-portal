import React from 'react';
import { createBrowserHistory } from "history";
// import logo from './logo.svg';
import './App.css';
//import Login from './pages/Login';
import Home from './pages/Home'
import Login from './pages/Login'
import {Router,Route,Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

const hist = createBrowserHistory();
const App: React.FC = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/" component={Home}/>
        {/* <Route path="/" component={Home} exact/> */}
        
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
        
      </Router>
  );
};

export default App;