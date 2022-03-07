import { CustomButtonComponent } from './button.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/CustomButton',
    component: CustomButtonComponent,
}

// Other option
// export default {
//     title: 'Components/CustomButton',
//     component: CustomButtonComponent,
//     argTypes: {
//         type: {
//             type: 'select',
//             name: 'Button Type',
//             options: ['danger', 'success']
//         }  
//     }
// }

const Template: Story<CustomButtonComponent> = (args: CustomButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});

export const Danger = Template.bind({});
Danger.args = {
    label: 'Press',
    type: 'danger'
}
