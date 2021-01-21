import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();

  onItemClick(itemName: string): void {
    this.itemClicked.emit(itemName);
  }

}
