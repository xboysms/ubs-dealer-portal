import { createSlice } from '@reduxjs/toolkit'

export const versionSlice = createSlice({
  name: 'version',
  initialState: {
      data:[],
      loading:false,
      error:false
  },
  reducers: {
    start: state => {
      state.loading=true;
      state.error=false;
    },
    finish: (state,action) => {
      state.loading =false;
      state.data=action.payload;
      state.error=false;
    },
    loadFailed: state => {
        state.error=true;
        state.loading=false;
    }
  }
})

export const { start, finish,loadFailed} = versionSlice.actions
export default versionSlice.reducer