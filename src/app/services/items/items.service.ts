import {Injectable} from '@angular/core';
import {Item} from "../../models/item.model";
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import {AppStore} from "../../models/appstore.model";
import {Store} from "@ngrx/store";
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class ItemsService {
  items: Observable<Array<Item>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.items = store.select('items');
  }

  loadItems() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({type: 'ADD_ITEMS', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

  saveItem(item: Item) {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ( {type: 'CREATE_ITEM', payload}))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store.dispatch({type: 'UPDATE_ITEM', payload: item}));
  }

  deleteItem(item: Item) {
    this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store.dispatch({type: 'DELETE_ITEM', payload: item}));
  }
}
