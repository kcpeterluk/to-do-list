import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  items:Item[] = this.listService.getItems();

  constructor(private listService: ListService) { }

  ngOnInit(): void { }

}
