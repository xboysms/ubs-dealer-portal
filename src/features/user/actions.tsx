import {  
    LOGIN_REQUESTING,
  } from './constants'

  const loginRequest = ({username, password}:any) => {  
      console.log(username);
      console.log(password);
    return {
      type: LOGIN_REQUESTING,
      username,password
    }
  }

  export default loginRequest  