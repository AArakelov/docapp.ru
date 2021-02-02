import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopPageComponent} from './desktop-page.component';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  {path: '', component: DesktopPageComponent}
];

@NgModule({
  declarations: [DesktopPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ], exports: [RouterModule]
})
export class DesktopModule {
}
