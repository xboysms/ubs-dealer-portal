import  React from  "react";
import { Route, Redirect } from  "react-router-dom"
import { useSelector } from 'react-redux'
import {userData} from '../app/rootReducer'
import PropTypes from "prop-types";

export default function PrivateRoute({ component:Component, ...rest }) {
    // const dispatch=useDispatch();
    const token= localStorage.getItem("token");
    const user = useSelector(userData).user;
    const isAuthenticated=(token||(user && user.Token));
    // console.log(token)
    // console.log(user.Token)
    // if(token && !user.Token)
    // {

    //     //dispatch(refreshUserByToken(token));
    // }
    return (
      <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { referer: props.location }
              }}
            />
          )
        }
      />
    );
  }
  PrivateRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.any
  };
