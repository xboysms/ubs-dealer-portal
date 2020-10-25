import  React from  "react";
import { Route, Redirect } from  "react-router-dom"
import { useSelector } from 'react-redux'
import {userData} from '../app/rootReducer'
const PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
        exact: boolean;
    }> = (props) => {

    const user = useSelector(userData);
    console.log(user);
    return  user && user.successful ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) : 
        (<Redirect  to="/login"  />);
};
export default PrivateRoute;