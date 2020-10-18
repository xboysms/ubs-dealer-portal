import {Container} from '@material-ui/core'
import React from 'react';
// import { useState,useContext } from 'react';
import SignIn from '../component/SignIn'

const Login: React.FC = () => {
// const [isBusy,setIsBusy]=useState(false);
// const [email,setEmail]=useState('');
// const [password,setPassword]=useState('');
// const [errorMessage, setErrorMessage]=useState('');
// async function doLogin(){
//     setIsBusy(true);
//     setErrorMessage('');
    
    
// }
return (
    <Container>
     <SignIn></SignIn>
    </Container>
    );
};

export default Login;