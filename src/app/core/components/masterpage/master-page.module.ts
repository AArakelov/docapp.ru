import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocAppMasterPageComponent} from './doc-app-master-page/doc-app-master-page.component';
import {RouterModule} from '@angular/router';
import {HeaderTopComponent} from '../header-top/header-top.component';
import {HeaderSideComponent} from '../header-side/header-side.component';


@NgModule({
  declarations: [DocAppMasterPageComponent, HeaderTopComponent, HeaderSideComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [DocAppMasterPageComponent]
})
export class MasterPageModule {
}
