import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultData= [
    {title: 'task1', done: false},
    {title: 'task2', done: false},
    {title: 'task3', done: false},
    {title: 'task4', done: true},
    {title: 'task5', done: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  printChildData($event) {
    console.log($event);
  }
}
