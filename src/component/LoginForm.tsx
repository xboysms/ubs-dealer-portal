import React, { FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {loginRequest} from '../features/user/actions'
import { RootState } from '../app/rootReducer';
import { Typography } from '@material-ui/core';
import CustomLoading from './CustomLoading';
import ButtonLogin from './ButtonLogin';

// const useStyles = makeStyles((theme) => ({
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));



export const LoginView = ({userData}:any) =>{
    const {requesting,errors}= userData;
    // const classes = useStyles();
    const dispatch=useDispatch();
    const [username, setUserName]=useState('');
    const [password, setPassword]=useState('');
    // const [isShow,setIsShow]=useState(false);
    function doLogin(e:FormEvent<HTMLFormElement>){
      e.preventDefault();
        dispatch(loginRequest({username,password}));
    }
    // function aClick(e:any){
    //   e.preventDefault();
    //   setIsShow(!isShow);
    // }
    // console.log("userdata",userData);
    // console.log("isShow",isShow);
    if (userData.user && userData.user.Token) {
        return <Redirect to="/" />;
      }
    return (
        <form onSubmit={doLogin}>
            {requesting ? (<CustomLoading isPrimary/>): (<div></div>) }
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e)=>setUserName(e.target.value)}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            { (errors && errors.length>0) ? (<Typography color='error'>{errors[0].message}</Typography>) : (<div></div>)}
            
            <ButtonLogin isFullWidth isPrimary label="Sign In" ></ButtonLogin>

            {/* <a href='google.com' onClick={aClick}>Want to buy a new car?</a>
            {isShow && <p>Call +11 22 33 44 now!</p>} */}

            {/* <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid> */}
        </form>
    );
}

const LoginForm = connect((state:RootState) => ({ userData: state.user }), {
})(LoginView);
export default LoginForm;

