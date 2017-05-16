import {Component} from '@angular/core';
import {Item} from "../../models/item.model";
import {Observable} from "rxjs";
import {ItemsService} from "../../services/items/items.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../../models/appstore.model";
import {ItemListComponent} from "../item-list/item-list.component";
import {ItemDetailComponent} from "../item-detail/item-detail.component";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService,
              private store: Store<AppStore>) {
    this.items = itemsService.items;
    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));

    itemsService.loadItems();
  }

  selectItem(item: Item) {
    console.log('Inside select item', item);
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  deleteItem(item: Item) {
    console.log('Inside deleteItem', item);
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);

    this.resetItem();
  }
}
