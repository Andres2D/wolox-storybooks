import { FormComponent } from './form.component';
import { Story } from '@storybook/angular/types-6-0';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { InputFormComponent } from '../../components/input-form/input-form.component';
import { CustomButtonComponent } from '../../components/button/button.component';

export default {
    title: 'Pages/Form',
    component: FormComponent,
}

const Template: Story<FormComponent> = (args: FormComponent) => ({
    moduleMetadata: {
        declarations: [
            FormComponent,
            AlertComponent,
            InputFormComponent,
            CustomButtonComponent
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    },
    props: args
});

export const Primary = Template.bind({});
