import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;
  constructor() { }

  ngOnInit() {
  }

}
