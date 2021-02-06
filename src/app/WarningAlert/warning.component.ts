import {Component} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})

export class WarningComponent {

  status = true;

  // tslint:disable-next-line:typedef
  getButtonStatus() {
    return status;
  }
}
