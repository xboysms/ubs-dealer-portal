import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../component/Copyright';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { connect } from 'react-redux';
import loginRequest from '../features/user/actions'
import {userData} from '../app/rootReducer'
import { RootState } from '../app/rootReducer';
import {  
    LOGIN_REQUESTING
  } from '../features/user/constants'
import { GET_AVAILABLE_VERSION_LIST } from '../features/version/actions';
//import faker from 'faker'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Login: React.FC = () =>{
    const record= useSelector(userData);
    const {requesting,
        successful,
        messages,
        errors}= record;
        console.log("userdata",record);
    const classes = useStyles();
    const history= useHistory();
    const dispatch=useDispatch();
  const [username,setUserName]= useState('');
  const [password,setPassword]= useState('');
  useEffect(()=>{
    dispatch({type:GET_AVAILABLE_VERSION_LIST});
  },[]);
  function doLogin(){
    dispatch(loginRequest({username,password}));
      //history.push("/");
  }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <form className={classes.form} noValidate> */}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={doLogin}
            >
              Sign In
            </Button>
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
          {/* </form> */}
        </div>

        {/* <div>
          {!requesting && !!errors.length && (
            <div>custom error</div>
          )}
          {!requesting && !!messages.length && (
            <div>custom message</div>
          )}
          {requesting && <div>Logging in...</div>}
          {!requesting && !successful && (
            <div>something wrong</div>
          )}
        </div> */}

        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}
//export default Login;
const abc = connect((state:RootState) => ({ userData: state.user }), {
})(Login);
// const mapStateToProps = state:RootState => ({  
//     userData: state.user,
//   })

// const connected = connect(mapStateToProps, { loginRequest })(Login)

export default abc;