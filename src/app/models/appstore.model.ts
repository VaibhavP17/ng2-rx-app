import {Item} from "./item.model";
/**
 * Created by PACHAURI on 16-May-17.
 */

export interface AppStore {
  items: Item[];
  selectedItem: Item;
}
