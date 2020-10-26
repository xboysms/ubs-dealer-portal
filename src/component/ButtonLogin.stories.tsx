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

export const Secondary = Template.bind({});
Secondary.args = {
    ...Default.args,
    isPrimary:false
};
