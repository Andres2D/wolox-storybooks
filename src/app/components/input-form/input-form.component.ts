import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Input() label: string = 'Input';
  @Input() required: boolean = false;
  @Input() type: 'text' | 'number' = 'text';
}
