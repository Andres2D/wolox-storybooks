import { HomeComponent } from './home.component';
import { CardComponent } from '../../components/card/card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Pages/Home',
    component: HomeComponent
}

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [HomeComponent, CardComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    },
});

export const Primary = Template.bind({});
