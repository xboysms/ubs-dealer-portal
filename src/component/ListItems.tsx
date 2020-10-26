import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { useDispatch } from 'react-redux';
import {logoutRequest} from '../features/user/actions'
import { useHistory } from 'react-router-dom';
import LeftMenuItem from './LeftMenuItem'
//import {logout} from '../features/user/usersSlice'

export const MainListItems:React.FC= ()=> {
  function goDashBoard(){
    history.push('/')
  }
  function goStocks(){
    history.push('/stocks')
  }
  function goProducts(){
    history.push('/apps')
  }
  
  const history= useHistory();
  return (
    <List>
        <LeftMenuItem icon="Home" text="Dashboard" customAction={()=>{goDashBoard()}} />
        <LeftMenuItem icon="Apps" text="Applications" customAction={()=>{goProducts()}} />
        <LeftMenuItem icon="Stock" text="Stocks" customAction={()=>{goStocks()}} />
        <LeftMenuItem icon="Receipt" text="Receipts" customAction={()=>{goDashBoard()}} />
      </List>
    );
};
export const SecondaryListItems: React.FC = ()=> {
  function doLogout(){
    dispatch(logoutRequest());
    history.go(0);
  }
  const dispatch=useDispatch();
  const history= useHistory();
  return (
    <List>
      <ListSubheader inset>System</ListSubheader>
      <LeftMenuItem icon="Logout" text="Log out" customAction={()=>{doLogout()}} />
    </List>
  );
};