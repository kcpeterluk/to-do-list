import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  items:string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];

  constructor() { }

  ngOnInit(): void {
  }

}
