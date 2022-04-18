import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  items:Task[] = this.taskService.getTasks();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  toggleTaskStatus(id: number) {
    this.taskService.toggleTaskStatus(id);
  }

}
