import  React from  "react";
import { Route, Redirect } from  "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import {userData} from '../app/rootReducer'
import {refreshUserByToken} from '../features/user/actions'
const PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {
    const dispatch=useDispatch();
    const token= localStorage.getItem("token");
    const user = useSelector(userData).user;
    console.log(token)
    console.log(user.Token)
    if(token && !user.Token)
    {

        //dispatch(refreshUserByToken(token));
    }
    // console.log(user);
    //console.log(token);
    return  (token||user && user.Token) ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/login"  />);
};
export default PrivateRoute;