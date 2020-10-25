import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
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
  const history= useHistory();
  return (
    <List>
        <ListItem button onClick={()=> {goDashBoard()}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button onClick={()=> {goStocks()}}>
          <ListItemIcon>
            <DirectionsCar />
          </ListItemIcon>
          <ListItemText primary="Stocks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItem>
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