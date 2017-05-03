import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './components/items/items.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AlertModule } from "ng2-bootstrap";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WidgetsComponent,
    ItemDetailComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
