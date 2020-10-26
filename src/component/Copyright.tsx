import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';
//import { useSelector } from 'react-redux'
//import {token} from '../features/token/tokenSlice'

const Copyright: React.FC<FooterData> = ({
  companyName = 'Duy Ha Le',
  companyLink = 'https://github.com/virgolee2209/ubs-dealer-portal/',
  copyrightYear=new Date().getFullYear(),
  ...props
}) => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href={companyLink}>
          {companyName}
        </Link>{' '}
        {/* {currentToken} */}
        {copyrightYear}
        {'.'}
      </Typography>
    );
  }
  export default Copyright;

export interface FooterData {
  /**
   * Name of the company
   */
  companyName: string;
  /**
   * Link to the homepage of the company
   */
  companyLink: string;
  /**
   * year number next to copy right character
   */
  copyrightYear:number;
}