import React from 'react';
import {LoginView} from './LoginForm';
// import {initialState} from '../features/product/slice'
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';


export default {
    component:LoginView,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title:'Login Form'
}


  

  
const Template = args => <LoginView {...args} />;
export const Default= Template.bind({});
Default.args = {
    userData:{
    errors:[],
    requesting:false
  }
  
};


export const Loading = Template.bind({});
Loading.args = {
   userData:{
    errors:[],
    requesting:true
  }
};

export const Error = Template.bind({});
Error.args = {
  userData:{
    requesting:false,
    errors:[{message:'Something is wrong'}]
  }
};


// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      user: {
        errors:[],
        requesting:false
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};