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
import {GET_AVAILABLE_VERSION_LIST} from '../features/version/actions'
import {RootState} from '../app/rootReducer'

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
      dispatch({type:GET_AVAILABLE_VERSION_LIST});
  },[dispatch]);
  const classes = useStyles();
  console.log(versions);
  return (
    <React.Fragment>
      <Title>Available Versions</Title>
      {versions.error ?? <div>Error</div>}
        {versions.data.length===0 ? (<div>loading</div>):(
    <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell>Version</TableCell>
        <TableCell>File Version</TableCell>
        <TableCell>Status</TableCell>
        <TableCell align="right">Build Number</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {versions.data.map((version:any) => (
        <TableRow key={version.Build}>
          <TableCell>{version.Id}</TableCell>
          <TableCell>{version.FileVersion}</TableCell>
          <TableCell>{version.Status}</TableCell>
          <TableCell align="right">{version.Build}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)}
      
      <div className={classes.seeMore}>
        <Link color="primary" href="#">
          More versions
        </Link>
      </div>
    </React.Fragment>
  );
}

const VersionList = connect((state:RootState) => ({ versions: state.version }), {
})(VersionView);

export default VersionList;