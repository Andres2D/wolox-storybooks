import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: 'success' | 'danger' = 'success';
  @Input() label: string = 'Click me!';
  @Output() action: EventEmitter<boolean> = new EventEmitter();

  emitAction(): void {
    this.action.emit();
  }
}
