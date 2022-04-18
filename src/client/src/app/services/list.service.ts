import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private items: Task[] = [
    { Id: 1, Description: "My item 1", Done: false },
    { Id: 2, Description: "My item 2", Done: false },
    { Id: 3, Description: "My item 3", Done: false },
    { Id: 4, Description: "My item 4", Done: false }
  ];

  constructor() { }

  addToList(item: Task) {
    const nextId = this.getNextId();
    item.Id = nextId;
    this.items.push(item);
  }

  private getNextId(): number {
    return Math.max(...this.items.map(e => e.Id));
  }

  updateItem(item: Task) {
    const index = this.items.findIndex(e => e.Id == item.Id);
    this.items[index] = item;
  }

  removeFromList(id: number) {
    const index = this.items.findIndex(e => e.Id == id);
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  getItem(id: number): Task | undefined {
    return this.items.find(e => e.Id == id);
  }

  clearList() {
    this.items = [];
    return this.items;
  }

}
