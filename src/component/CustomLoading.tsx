import {  CircularProgress } from '@material-ui/core';
import React from 'react';

export interface LoadingProps {
  isPrimary?:boolean;
}
const CustomLoading: React.FC<LoadingProps> = ({
    isPrimary=false,
    ...props
  }) => {
    return (
      <CircularProgress
      color={isPrimary?undefined :"secondary" }
      {...props} />
    );
  };
  export default CustomLoading;