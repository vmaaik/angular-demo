import {Component, OnInit} from '@angular/core';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-assignement-third',
  templateUrl: './assignement-third.component.html',
  styleUrls: ['./assignement-third.component.css']
})
export class AssignementThirdComponent implements OnInit {

  number = 0;

  log = {
    time: '',
    number: ''
  };

  isDisplayed = false;
  logs = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.isDisplayed = !this.isDisplayed;

    if (this.isDisplayed) {
      this.number++;
      this.logs.push({time: new Date, number: this.number});
    }
  }

  addColour(log) {
    return log.number >= 5 ? 'blue' : 'white';
  }

}
