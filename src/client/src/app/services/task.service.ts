import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasks: Task[] = [
    { Id: 1, Description: "My item 1", Done: false },
    { Id: 2, Description: "My item 2", Done: false },
    { Id: 3, Description: "My item 3", Done: false },
    { Id: 4, Description: "My item 4", Done: false }
  ];

  constructor() { }

  newTask(description: string) {
    const nextId = Math.max(...this.tasks.map(e => e.Id)) + 1;
    const item: Task = {
      Id: nextId,
      Description: description,
      Done: false
    };
    this.tasks.push(item);
  }

  updateTask(id: number, description: string) {
    const index = this.tasks.findIndex(e => e.Id == id);
    this.tasks[index].Description = description;
  }

  removeTask(id: number) {
    const index = this.tasks.findIndex(e => e.Id == id);
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(e => e.Id == id);
  }

  clearTasks() {
    this.tasks = [];
    return this.tasks;
  }

}
