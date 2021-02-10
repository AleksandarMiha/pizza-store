import { Pipe, PipeTransform } from '@angular/core';
import { MenuTableComponent } from '../components/menu-table/menu-table.component';

@Pipe({
  name: 'searchInput'
})
export class SearchInputPipe implements PipeTransform {

  transform(menu:any, searchTerm: string) {   
    if (!menu || !searchTerm) return menu; 
  
    return menu.filter((menu:any) =>
    menu?.name?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1); 
  } 

}
