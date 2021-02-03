import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {ProfileCardModule} from './profile-card/profile-card.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileCardModule
  ], exports: [ProfileCardModule]
})
export class ProfileModule {
}
