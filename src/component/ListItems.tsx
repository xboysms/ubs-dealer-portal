import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Home from '@material-ui/icons/Home';
import Receipt from '@material-ui/icons/Receipt';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Apps from '@material-ui/icons/Apps';
import Eject from '@material-ui/icons/Eject';
import List from '@material-ui/core/List';
import { useDispatch } from 'react-redux';
import {logoutRequest} from '../features/user/actions'
import { useHistory } from 'react-router-dom';

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
        <ListItem button onClick={()=> {goDashBoard()}}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={()=> {goProducts()}}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Applications" />
        </ListItem>
        <ListItem button onClick={()=> {goStocks()}}>
          <ListItemIcon>
            <DirectionsCar />
          </ListItemIcon>
          <ListItemText primary="Stocks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItem> */}
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
      <ListItem button onClick={()=> {doLogout()}}>
        <ListItemIcon>
          <Eject />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
      </List>
  );
};