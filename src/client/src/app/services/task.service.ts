import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuid } from "uuid";

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private conatainerId: string = 'todo';
  private tasks$: Observable<Task[]>;

  constructor(private store: AngularFirestore) {
    this.tasks$ = this.store.collection(this.conatainerId).valueChanges({ idField: 'id'}) as Observable<Task[]>;
   }

  newTask(description: string) {
    const task: Task = {
      id: uuid(),
      description: description,
      done: false
    };
    console.log("Task to add", task);
    this.store.collection(this.conatainerId).add(task);
  }

  async updateTask(task: Task) {
    console.log("Task to update", task);
    await this.store.collection(this.conatainerId).doc(task.id).update(task);
  }

  async removeTask(id: string) {
    console.log("Task to delete", id);
    await this.store.collection(this.conatainerId).doc(id).delete();
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  getTask(id: string): Observable<Task> {
    return this.tasks$.pipe(
      map((tasks: Task[]) => tasks.find(task => task.id === id)!)
    );
  }

}
