import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    NavigationBarComponent,
    // SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    HttpClientModule
  ],
  exports: [
    NavigationBarComponent,
    // SearchPipe, 
  ]
})
export class SharedModule { }
