import { ListItemText, 
    ListItem,
    ListItemIcon } from '@material-ui/core';
import React from 'react';
import {Home,Receipt,DirectionsCar,Apps,Eject} from '@material-ui/icons/';


export interface LeftMenuItemProps {
  text:string;
  icon:"Home"|"Receipt"|"Stock"|"Apps"|"Logout";
  customAction: () => void;
}
const LeftMenuItem: React.FC<LeftMenuItemProps> = ({
    text="Home",
    icon="Home",
    customAction,
    ...props
  }) => {
    const GetIcon= () => {
        switch (icon) {
            case "Receipt":
                return <Receipt/>;
            case "Apps":
                return <Apps/>;
            case "Logout":
                return <Eject/>;
            case "Stock":
                return <DirectionsCar/>;
            case "Home":
            default:
                return <Home/>;
        }
      }
    return (
        <ListItem button onClick={()=>customAction()}>
        <ListItemIcon>
            {GetIcon()}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  };
  export default LeftMenuItem;