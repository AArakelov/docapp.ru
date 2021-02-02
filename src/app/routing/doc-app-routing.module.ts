import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DocAppMasterPageComponent} from '../core/components/masterpage/doc-app-master-page/doc-app-master-page.component';
import {MasterPageModule} from '../core/components/masterpage/master-page.module';

export const DOCAPP_ROUTES: Routes = [
  {
    path: '', component: DocAppMasterPageComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('../core/pages/home/home.module').then(m => m.HomeModule)},
      {path: 'desktop', loadChildren: () => import('../core/pages/desktop-page/desktop.module').then(m => m.DesktopModule)},
      {
        path: 'medical-card',
        loadChildren: () => import('../core/pages/medical-card-page/medical-card.module').then(m => m.MedicalCardModule)
      }
    ]
  }
];

//
@NgModule({
  declarations: [],
  imports: [
    MasterPageModule,
    CommonModule,
    RouterModule.forChild(DOCAPP_ROUTES)
  ], exports: [RouterModule]
})
export class DocAppRoutingModule {
}
