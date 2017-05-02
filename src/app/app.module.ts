import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ItemsComponent } from './components/items/items.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import {AlertModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    ItemsComponent,
    WidgetsComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [ItemsComponent]
})
export class AppModule { }
