import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() location: string = '';
  @Input() status: 'Alive' | 'unknown' | 'Dead' = 'unknown';
}
