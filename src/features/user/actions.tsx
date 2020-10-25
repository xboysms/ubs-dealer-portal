import {  
    LOGIN_REQUESTING,
    LOGOUT_REQUESTING,
    USER_REFRESH_BY_TOKEN
  } from './constants'

  export const loginRequest = ({username, password}:any) => {  
      console.log(username);
      console.log(password);
    return {
      type: LOGIN_REQUESTING,
      username,password
    }
  }
  export const logoutRequest = () => {  
  return {
    type: LOGOUT_REQUESTING
  }  
}

export const refreshUserByToken = ({token}:any) => {  
    return {
      type: USER_REFRESH_BY_TOKEN,
      token
    }  
  }

//   export default loginRequest  