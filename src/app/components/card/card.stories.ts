import { CardComponent } from './card.component';
import { Story } from '@storybook/angular/types-6-0';

export default {
    title: 'Components/Card',
    component: CardComponent
}

const Template: Story<CardComponent> = (args: CardComponent) => ({
    props: args
});

export const Primary = Template.bind({});

export const RickSanchez = Template.bind({});
RickSanchez.args = {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: 'Earth',
    name: 'Ricardo',
    status: 'unknown'
}
