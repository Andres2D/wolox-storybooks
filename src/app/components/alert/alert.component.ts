import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() type: 'error' | 'warning' | 'info' = 'info';
  @Input() message: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  @Input() closeButton: boolean = false;
  @Output() closeAction: EventEmitter<any> = new EventEmitter();

  close(): void {
    this.closeAction.emit();
  }
}
