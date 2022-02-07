import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: string = 'https://rickandmortyapi.com/api/character/avatar/4.jpeg';
  @Input() name: string = 'Beth';
  @Input() location: string = 'Earth';
  @Input() status: 'Alive' | 'unknown' | 'Dead' = 'unknown';
}
