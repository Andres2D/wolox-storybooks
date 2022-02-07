import { InputFormComponent } from './input-form.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/InputForm',
    component: InputFormComponent
}

const Template: Story<InputFormComponent> = (args: InputFormComponent) => ({
    props: args
});

export const Primary = Template.bind({});

export const RequiredId = Template.bind({});
RequiredId.args = {
    label: 'Id',
    required: true,
    type: 'number'
}
