import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() sendEvent = new EventEmitter;
  searchTerm: any = ''
  constructor() { }

  ngOnInit(): void {

  }

  onChange(e: string) {
    this.sendEvent.emit(e);
  }

}
