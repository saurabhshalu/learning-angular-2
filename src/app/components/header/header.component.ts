import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  importantData: string = 'this is really not important btw';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() customEvent: EventEmitter<String> = new EventEmitter<String>();

  getImpData($event) {
    this.customEvent.emit(this.importantData);
  }

}
