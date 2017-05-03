import { Component } from '@angular/core';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Array<Item>;
  selectedItem: Item;
  constructor() {
   this.items = [
      {
        "id": 1,
        "name": "Item 1",
        "description": "This is a description"
      },
      {
        "id": 2,
        "name": "Item 2",
        "description": "This is a description"
      },
      {
        "id": 3,
        "name": "Item 3",
        "description": "This is a lovely item"
      },
      {
        "name": "Vaibhav",
        "description": "Awesome",
        "id": 5
      }
    ]
  }

  selectItem(item : Item) {

  }

}
