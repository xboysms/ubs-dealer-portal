import {Container} from '@material-ui/core'
import React from 'react';
import Dashboard from '../component/Dashboard'

const Home: React.FC = () => {
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
     <Dashboard></Dashboard>
    </Container>
    );
};
export default Home;