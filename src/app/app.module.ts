import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DocumentCardListComponent} from './shared/documents/document-card-list/document-card-list.component';
import {DocumentCardComponent} from './shared/documents/document-card/document-card.component';
import {DocAppMasterPageComponent} from './core/components/masterpage/doc-app-master-page/doc-app-master-page.component';



@NgModule({
  declarations: [
    AppComponent,
    DocumentCardListComponent,
    DocumentCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
