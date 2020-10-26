import React from 'react';
import LeftMenuItem, {LeftMenuItemProps} from './LeftMenuItem';
import { Story } from '@storybook/react/types-6-0';

export default {
    component:LeftMenuItem,
    title:'Left Menu Item'
}

const Template: Story<LeftMenuItemProps> = (args) => <LeftMenuItem {...args} />;

export const Default= Template.bind({});
Default.args = {
  };

export const Home = Template.bind({});
Home.args = {
    ...Default.args,
    icon:"Home",
    text:"Home"
};

export const Applications = Template.bind({});
Applications.args = {
    ...Default.args,
    icon:"Apps",
    text:"Applications"
};
export const Stocks = Template.bind({});
Stocks.args = {
    ...Default.args,
    icon:"Stock",
    text:"Stocks"
};
export const Receipt = Template.bind({});
Receipt.args = {
    ...Default.args,
    icon:"Receipt",
    text:"Receipts"
};
export const LogOut = Template.bind({});
LogOut.args = {
    ...Default.args,
    icon:"Logout",
    text:"Log Out"
};
