import React from 'react';
import {ViewComponent} from './ProductList';
// import {initialState} from '../features/product/slice'
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';


export default {
    component:ViewComponent,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title:'Product List'
}


function createData(ServiceId, ServiceCode, 
    ServiceName, PackageUpgradeId, 
    Status) {
    return { ServiceId, ServiceCode, ServiceName, PackageUpgradeId, Status };
  }
  
  const data = [
    createData(0, 'UPDATE_SRV', 'Eclipse Update Service', '577B7CE4-06AE-46BC-A3BC-F2234234EB26', 'ENABLED'),
    createData(1, 'Product 2', 'Product Name 2', 'XXXXXX-XXX-XXXX-XXX', 'DISABLE'),
    createData(1, 'Product 3', 'Product Name 3', 'XXXXXX-XXX-XXXX-XXX', 'ENABLED'),
    createData(1, 'Product 4', 'Product Name 4', 'XXXXXX-XXX-XXXX-XXX', 'ENABLED'),
    createData(1, 'Product 5', 'Product Name 5', 'XXXXXX-XXX-XXXX-XXX', 'DISABLE'),
  ];
  
const Template = args => <ViewComponent {...args} />;
export const Default= Template.bind({});
Default.args = {
  appState:{
    data: data,
    requesting:false
  }
  
};


export const Loading = Template.bind({});
Loading.args = {
  appState:{
    data: [],
    requesting:true
  }
};

export const Error = Template.bind({});
Error.args = {
  appState:{
    data: [],
    requesting:false,
    error:'Something is wrong'
  }
};


// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      products: {
        data: data,
        requesting:false
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};