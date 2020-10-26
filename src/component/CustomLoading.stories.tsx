import React from 'react';
import CustomLoading, {LoadingProps} from './CustomLoading';
import { Story } from '@storybook/react/types-6-0';

export default {
    component:CustomLoading,
    title:'Loading'
}

const Template: Story<LoadingProps> = (args) => <CustomLoading {...args} />;

export const Default= Template.bind({});
Default.args = {
  };

  export const Primary = Template.bind({});
  Primary.args = {
      ...Default.args,
      isPrimary:true
  };

export const Secondary = Template.bind({});
Secondary.args = {
    ...Default.args,
    isPrimary:false
};
