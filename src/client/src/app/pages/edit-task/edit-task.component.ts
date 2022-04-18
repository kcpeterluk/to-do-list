import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.sass']
})
export class EditTaskComponent implements OnInit {

  private taskId: number = 0;

  itemForm = this.formBuilder.group({
    description: ''
  });

  constructor(
    private listService: TaskService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.taskId = Number(routeParams.get('id'));
    const item = this.listService.getTask(this.taskId);
    if (item)
      this.itemForm = this.formBuilder.group({
        description: item.Description,
      });
  }

  onSubmit(): void {
    this.listService.updateTask(this.taskId, this.itemForm.value.description);
    this.navigateToRoot();
  }

  onRemoveClick(): void {
    this.listService.removeTask(this.itemForm.value.id);
    this.navigateToRoot();
  }

  onCancelClick(): void {
    this.navigateToRoot();
  }

  private navigateToRoot() {
    this.router.navigate(['/'], {relativeTo:this.route});
  }

}
