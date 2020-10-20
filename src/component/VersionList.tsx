import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const VersionView=({
  versions
}: any) => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch({type:"API_CALL_REQUEST"});
  });
  const classes = useStyles();
 
  return (
    <React.Fragment>
      <Title>Available Versions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {versions && versions.isArray() && versions.map((version:any) => (
            <TableRow key={version.Build}>
              <TableCell>{version.Id}</TableCell>
              <TableCell>{version.FileVersion}</TableCell>
              <TableCell>{version.FileName}</TableCell>
              <TableCell>{version.Status}</TableCell>
              <TableCell align="right">{version.Build}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          More versions
        </Link>
      </div>
    </React.Fragment>
  );
}

const VersionList = connect((state) => ({ versions: state }), {
})(VersionView);

export default VersionList;