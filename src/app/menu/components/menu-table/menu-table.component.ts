import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import * as moment from 'moment';
import { IMenu } from '../../../shared/models/menu'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  allMenus!: IMenu[];
  searchTerm: any = '';
  modalOpen: boolean = false;
  selectedMenuData: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
        this.allMenus = data;
        this.addId(this.allMenus)
        this.sortDate(this.allMenus)
        console.log(this.allMenus)
      },
      err => console.log(err)
    )
  }

  sortDate(date: IMenu[]) {
    return date.sort((a: any, b: any) => b.date > a.date ? 1 : -1)
  }

  addId(menus: any) {
    menus.forEach((item: IMenu, i: number) => { item.id = i + 1; });
  }

  receivedMessage(searchMessage: string) {
    this.searchTerm = searchMessage;
  }

  removeMenu(menu: IMenu) {
    const index = this.allMenus.findIndex((singleMenu: Object) => singleMenu === menu);
    this.allMenus.splice(index, 1);  // I could only take the index (i) from html instead of findIndex
  }

  toggleModal(data: any) {
    this.selectedMenuData = data;
    this.modalOpen = true;
  }

  recieveDataForm(formData: IMenu) {
    if (!formData.id) {
      // Without id is new item
      // max id + 1 is always next id
      const maxId = this.allMenus.reduce((acc: any, menu: IMenu) => acc = acc > menu.id ? acc : menu.id, 0);
      formData.id = maxId + 1;
      this.allMenus.push(formData) 
      this.sortDate(this.allMenus)
    } else {
      const menuItem = this.allMenus.find((menu: any) => menu.id === formData.id);
      menuItem!.name = formData.name
      menuItem!.size = formData.size
      menuItem!.slug = formData.slug
      menuItem!.price = formData.price
      this.sortDate(this.allMenus) 
    }
    this.modalOpen = false;
  }

  recieveDialogClose(dialogCance: any) {
    this.modalOpen = false;
  }

  ngOnDestroy() {
    this.destroy$.next(true); 
    this.destroy$.unsubscribe();
  }

}
