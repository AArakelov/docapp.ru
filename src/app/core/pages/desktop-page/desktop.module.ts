import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopPageComponent} from './desktop-page.component';
import {RouterModule, Routes} from '@angular/router';
 import {ProfileModule} from '../../components/Profile/profile.module';
import {DoctorsModule} from '../../components/doctors/doctors.module';



const routes: Routes = [
  {path: '', component: DesktopPageComponent}
];

@NgModule({
  declarations: [DesktopPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProfileModule,
    DoctorsModule
  ], exports: [RouterModule]
})
export class DesktopModule {
}
