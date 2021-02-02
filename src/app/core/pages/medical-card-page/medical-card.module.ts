import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedicalCardComponent} from './medical-card/medical-card.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: MedicalCardComponent}
];

@NgModule({
  declarations: [MedicalCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class MedicalCardModule {
}
