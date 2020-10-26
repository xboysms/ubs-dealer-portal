import { createSlice } from '@reduxjs/toolkit'

const initialState={
  requesting: false,
  data:[] as any,
  error:'',
}

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState: initialState,
  reducers: {
    gettingData: state => {
      state.requesting = true;
    },
    getDataFinished: (state,action) => {
      state.error= ''
      state.requesting= false
      state.data=action.payload;
    },
    getDataError: (state,action) => {
      state.error= action.payload;
      state.requesting= false;
    },
    clear: state =>{
      state=initialState;
    }
  }
});

export const { 
  gettingData, getDataFinished, 
  getDataError,clear} = stocksSlice.actions;
export default stocksSlice.reducer;