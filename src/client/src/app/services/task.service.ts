import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuid } from "uuid";

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private userCollectionId: string = 'user';
  private taskCollectionId: string = 'task';
  private taskRef: AngularFirestoreCollection<unknown>;
  private tasks$: Observable<Task[]>;

  constructor(private store: AngularFirestore) {
    const auth = getAuth();
    this.taskRef = this.store.collection(this.userCollectionId).doc(auth.currentUser?.uid).collection(this.taskCollectionId);
    this.tasks$ = this.taskRef.valueChanges({ idField: 'id'}) as Observable<Task[]>;
   }

  newTask(description: string) {
    const task: Task = {
      id: uuid(),
      description: description,
      done: false
    };
    this.taskRef.add(task);
  }

  async updateTask(task: Task) {
    await this.taskRef.doc(task.id).update(task);
  }

  async removeTask(id: string) {
    await this.taskRef.doc(id).delete();
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
