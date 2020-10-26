import React, { useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { connect } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { CircularProgress } from '@material-ui/core';
import {getAllStocks} from '../features/stock/actions'
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const ViewComponent:React.FC = ({
  appState
}: any) => {
  const classes = useStyles();
  const {requesting,error,data}= appState;
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getAllStocks());
  },[]);
  return (
    <React.Fragment>
      <Title>Online Stocks</Title>
      {(requesting||data.length===0) ? (<CircularProgress />) : (
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow key={row.stockId}>
              <TableCell>{row.stockClassDescription}</TableCell>
              <TableCell>{row.stockDescription}</TableCell>
              <TableCell>{row.branchDesc}</TableCell>
              <TableCell>{row.stockStatusDesc}</TableCell>
              <TableCell align="right">${row.sellingPrice.driveAwayIncGst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )}
    </React.Fragment>
  );
}

const StockList = connect((state:RootState) => ({ appState: state.stocks }), {
})(ViewComponent);

export default StockList;