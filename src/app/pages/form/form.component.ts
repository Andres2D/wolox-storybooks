import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  showAlert: boolean = true;

  showAlertMessage(option: boolean): void {
    this.showAlert = option;
  }
}
