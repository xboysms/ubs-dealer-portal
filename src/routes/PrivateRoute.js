import  React from  "react";
import { Route, Redirect } from  "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import {userData} from '../app/rootReducer'
// import {refreshUserByToken} from '../features/user/actions'
import PropTypes from "prop-types";
// const PrivateRoute: React.FC<{
//         component: React.FC;
//         path: string;
//         exact: boolean;
//     }> = (props) => {
//     const dispatch=useDispatch();
//     const token= localStorage.getItem("token");
//     const user = useSelector(userData).user;
//     console.log(token)
//     console.log(user.Token)
//     if(token && !user.Token)
//     {

//         //dispatch(refreshUserByToken(token));
//     }
//     // console.log(user);
//     //console.log(token);
//     return  (token||user && user.Token) ? (
//     <Route  path={props.path}  exact={props.exact} component={props.component} />) : 
//         (<Redirect  to="/login"  />);
// };
// export default PrivateRoute;


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
