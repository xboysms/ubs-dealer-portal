import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { connect } from 'react-redux';
import {loginRequest} from '../features/user/actions'
import { RootState } from '../app/rootReducer';
import { CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const LoginView = ({userData}:any) =>{
    const [username,setUserName]= useState('');
    const [password,setPassword]= useState('');
    const {requesting,user,successful,errors,messages}= userData;
    const classes = useStyles();
    const history= useHistory();
    const dispatch=useDispatch();
    function doLogin(){
        dispatch(loginRequest({username,password}));
    }
    console.log("userdata",userData);
    if (userData.user.Token) {
        return <Redirect to="/" />;
      }
    return (
        <React.Fragment>
            {requesting ? (<CircularProgress />) : (<div></div>) }
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
            { errors && errors.length>0 ? (<Typography color='error'>{errors[0].message}</Typography>) : (<div></div>)}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={doLogin}>Sign In</Button>
            <Grid container>
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
            </Grid>
        </React.Fragment>
    );
}

const LoginForm = connect((state:RootState) => ({ userData: state.user }), {
})(LoginView);
export default LoginForm;