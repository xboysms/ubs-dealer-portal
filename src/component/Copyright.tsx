import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
//import { useSelector } from 'react-redux'
//import {token} from '../features/token/tokenSlice'

const Copyright: React.FC = ()=> {
  // const currentToken= useSelector(token);
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://ultimate.net.au/">
          Ultimate Business Systems 
        </Link>{' '}
        {/* {currentToken} */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  export default Copyright;