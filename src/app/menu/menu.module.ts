import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './containers/menu/menu.component';
import { MenuTableComponent } from './components/menu-table/menu-table.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { SearchInputPipe } from './pipes/search-input.pipe';
import { DialogComponent } from './components/dialog/dialog.component'; 

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
];



@NgModule({
  declarations: [
    MenuComponent,
    MenuTableComponent,
    SearchComponent,
    SearchInputPipe,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class MenuModule { }
