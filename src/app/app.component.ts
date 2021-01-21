import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemFlag: string = 'recipes';

  setItemFlag(itemValue): void {
    this.itemFlag = itemValue;
  }

}
