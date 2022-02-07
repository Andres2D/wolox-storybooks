import { FooterComponent } from './footer.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/Footer',
    component: FooterComponent
}

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
    props: args
})

export const Primary = Template.bind({});
