import  React from  "react";
import { Route, Redirect } from  "react-router-dom"
import { useSelector } from 'react-redux'
import {currentUser} from '../features/user/usersSlice'
const PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    const user = useSelector(currentUser);
        console.log(user);
    return  user.token ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/login"  />);
};
export default PrivateRoute;