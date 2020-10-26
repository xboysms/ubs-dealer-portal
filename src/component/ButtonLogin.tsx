import { Button } from '@material-ui/core';
import React from 'react';

export interface ButtonProps {
  
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  isPrimary:boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ButtonLogin: React.FC<ButtonProps> = ({
  label='Login',
  isPrimary=true,
  ...props
}) => {
  return (
    <Button
    type="submit"
            variant="contained"
            color={isPrimary?"primary":"secondary"}
            
      {...props}>
      {label}
      </Button>
  );
};
export default ButtonLogin;