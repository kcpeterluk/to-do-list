import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private items: Item[] = [
    { Id: 1, Description: "My item 1" },
    { Id: 2, Description: "My item 2" },
    { Id: 3, Description: "My item 3" },
    { Id: 4, Description: "My item 4" }
  ];

  constructor() { }

  addToList(item: Item) {
    const nextId = this.getNextId();
    item.Id = nextId;
    this.items.push(item);
  }

  private getNextId(): number {
    return Math.max(...this.items.map(e => e.Id));
  }

  updateItem(item: Item) {
    const index = this.items.findIndex(e => e.Id == item.Id);
    this.items[index] = item;
  }

  removeFromList(i: number) {
    this.items.splice(i, 1);
  }

  getItems() {
    return this.items;
  }

  getItem(id: number): Item | undefined {
    return this.items.find(e => e.Id == id);
  }

  clearList() {
    this.items = [];
    return this.items;
  }

}
