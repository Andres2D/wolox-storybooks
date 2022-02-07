import { NavbarComponent } from './navbar.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/Navbar',
    component: NavbarComponent
}

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    props: args
});

export const Primary = Template.bind({});
