import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';



@NgModule({
  declarations: [DoctorListComponent],
  exports: [
    DoctorListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorsModule { }
