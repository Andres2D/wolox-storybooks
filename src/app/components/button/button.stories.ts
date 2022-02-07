import { CustomButtonComponent } from './button.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/CustomButton',
    component: CustomButtonComponent,
}

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});

export const Danger = Template.bind({});
Danger.args = {
    label: 'Press',
    type: 'danger'
}
