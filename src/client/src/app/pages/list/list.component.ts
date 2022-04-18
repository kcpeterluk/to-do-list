import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  items:Task[] = this.listService.getItems();

  constructor(private listService: ListService) { }

  ngOnInit(): void { }

}
