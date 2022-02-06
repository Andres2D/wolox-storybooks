import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: Character[] = [
    {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
    {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    },
    {
        id: 5,
        name: 'Jerry Smith',
        status: 'Alive',
        
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    },
    {
        id: 6,
        name: 'Abadango Cluster Princess',
        status: 'Alive',
        location: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    },
    {
        id: 7,
        name: 'Abradolf Lincler',
        status: 'unknown',
        location: {
        name: 'Testicle Monster Dimension',
        url: 'https://rickandmortyapi.com/api/location/21',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
        id: 8,
        name: 'Adjudicator Rick',
        status: 'Dead',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    },
    {
        id: 9,
        name: 'Agency Director',
        status: 'Dead',
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    },
    {
        id: 10,
        name: 'Alan Rails',
        status: 'Dead',
        location: {
        name: "Worldender's lair",
        url: 'https://rickandmortyapi.com/api/location/4',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    },
    {
        id: 11,
        name: 'Albert Einstein',
        status: 'Dead',
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    },
    {
        id: 12,
        name: 'Alexander',
        status: 'Dead',
        location: {
        name: 'Anatomy Park',
        url: 'https://rickandmortyapi.com/api/location/5',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    },
    {
        id: 13,
        name: 'Alien Googah',
        status: 'unknown',
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    },
    {
        id: 14,
        name: 'Alien Morty',
        status: 'unknown',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    },
    {
        id: 15,
        name: 'Alien Rick',
        status: 'unknown',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    },
    {
        id: 16,
        name: 'Amish Cyborg',
        status: 'Dead',
        location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
    },
    {
        id: 17,
        name: 'Annie',
        status: 'Alive',
        location: {
        name: 'Anatomy Park',
        url: 'https://rickandmortyapi.com/api/location/5',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    },
    {
        id: 18,
        name: 'Antenna Morty',
        status: 'Alive',
        location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    },
    {
        id: 19,
        name: 'Antenna Rick',
        status: 'unknown',
        location: {
        name: 'unknown',
        url: '',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    },
    {
        id: 20,
        name: 'Ants in my Eyes Johnson',
        status: 'unknown',
        location: {
        name: 'Interdimensional Cable',
        url: 'https://rickandmortyapi.com/api/location/6',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    },
  ];
}
