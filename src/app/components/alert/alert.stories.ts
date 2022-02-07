import { AlertComponent } from './alert.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
  title: 'Components/Alert',
  component: AlertComponent
};

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  closeButton: true,
  message: 'Warning'
}

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  closeButton: true,
  message: 'ERROR 404'
}
