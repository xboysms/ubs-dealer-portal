import React from 'react';
import Copyright, {FooterData} from './Copyright';
import { Story } from '@storybook/react/types-6-0';

export default {
    component:Copyright,
    title:'Footer'
}

const Template: Story<FooterData> = (args) => <Copyright {...args} />;

export const Default= Template.bind({});
Default.args = {
  };

export const Date2022 = Template.bind({});
Date2022.args = {
    ...Default.args,
    copyrightYear: 2022
};

export const LinkToGoogle = Template.bind({});
LinkToGoogle.args = {
    ...Default.args,
    companyLink: 'http://google.com'
};