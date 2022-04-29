import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})
export class EditTaskComponent implements OnInit {

  private task$!: Observable<Task>;
  private subscription!: Subscription;
  task: Task = { id: "", description: "", done: false };

  // taskForm = this.formBuilder.group({
  //   description: ''
  // });

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.taskService.getTask(params.get('id')!))
    );
    this.subscription = this.task$.subscribe((task: Task) => {
      this.task = task;
      console.log(this.task);
    });
    // const routeParams = this.route.snapshot.paramMap;
    // this.taskId = routeParams.get('id');
    // const item = this.taskService.getTask(this.taskId);
    // if (item)
    //   this.itemForm = this.formBuilder.group({
    //     description: item.description,
    //   });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.taskService.updateTask(this.task);
    this.navigateToRoot();
  }

  onRemoveClick(): void {
    this.taskService.removeTask(this.task.id);
    this.navigateToRoot();
  }

  onCancelClick(): void {
    this.navigateToRoot();
  }

  private navigateToRoot() {
    this.router.navigate(['/'], {relativeTo:this.route});
  }

}
