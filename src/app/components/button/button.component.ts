import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class CustomButtonComponent {

  @Input() type: 'success' | 'danger' = 'success';
  @Input() label: string = 'Click me!';
  @Output() onClick = new EventEmitter<Event>();

  // emitAction(): void {
  //   this.action.emit();
  // }
}
