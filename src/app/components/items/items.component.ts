import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Item} from "../../models/item.model";
import {Observable} from "rxjs";
import {ItemsService} from "../../services/items/items.service";
import {Store} from "@ngrx/store";
import {AppStore} from "../../models/appstore.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.itemsService.deleteItem(item);

    this.resetItem();
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
