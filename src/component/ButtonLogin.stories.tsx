import React from 'react';
import ButtonLogin, {ButtonProps} from './ButtonLogin';
import { Story } from '@storybook/react/types-6-0';

export default {
    component:ButtonLogin,
    title:'Button Login'
}

const Template: Story<ButtonProps> = (args) => <ButtonLogin {...args} />;

export const Default= Template.bind({});
Default.args = {
  };

export const DefaultSmall= Template.bind({});
DefaultSmall.args = {
    ...Default.args,
    isFullWidth:false
  };

export const SecondaryFullWidth = Template.bind({});
SecondaryFullWidth.args = {
    ...Default.args,
    isFullWidth:true,
    isPrimary:false
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    ...Default.args,
    isFullWidth:false,
    isPrimary:false
};
