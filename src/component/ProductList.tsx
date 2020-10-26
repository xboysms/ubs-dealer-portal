import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { connect } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { CircularProgress } from '@material-ui/core';
import {getAllProducts} from '../features/product/actions'
import { useDispatch } from 'react-redux';


const ViewComponent:React.FC = ({
  appState
}: any) => {
  const {requesting,data}= appState;
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts());
  },[dispatch]);
  return (
    <React.Fragment>
      <Title>Current Available Apps</Title>
      {(requesting||data.length===0) ? (<CircularProgress />) : (
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Upgrade Id</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow key={row.ServiceId}>
              <TableCell>{row.ServiceId}</TableCell>
              <TableCell>{row.ServiceCode}</TableCell>
              <TableCell>{row.ServiceName}</TableCell>
              <TableCell>{row.PackageUpgradeId}</TableCell>
              <TableCell>{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )}
    </React.Fragment>
  );
}

const ProductList = connect((state:RootState) => ({ appState: state.products }), {
})(ViewComponent);

export default ProductList;