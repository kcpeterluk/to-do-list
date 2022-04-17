import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private items: Item[] = [
    { Description: "My item 1" },
    { Description: "My item 2" },
    { Description: "My item 3" },
    { Description: "My item 4" }
  ];

  constructor() { }

  addToList(item: Item) {
    this.items.push(item);
  }

  removeFromList(i: number) {
    this.items.splice(i, 1);
  }

  getItems() {
    return this.items;
  }

  clearList() {
    this.items = [];
    return this.items;
  }

}
