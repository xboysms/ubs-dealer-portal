import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import Login from './pages/Login';
import Home from './pages/Home'
import Login from './pages/Login'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'


const App: React.FC = () => {
  return (
      <Router>
        {/* <PrivateRoute path="/" component={Home} exact/> */}
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        {/* <Redirect from="*" to="/" /> */}
      </Router>
  );
};

export default App;