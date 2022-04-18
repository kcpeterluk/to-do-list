import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass']
})
export class EditItemComponent implements OnInit {

  private taskId: number = 0;

  itemForm = this.formBuilder.group({
    description: ''
  });

  constructor(
    private listService: ListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.taskId = Number(routeParams.get('id'));
    const item = this.listService.getItem(this.taskId);
    if (item)
      this.itemForm = this.formBuilder.group({
        description: item.Description,
      });
  }

  onSubmit(): void {
    this.listService.updateItem(this.taskId, this.itemForm.value.description);
    this.router.navigate(['/'], {relativeTo:this.route});
  }

  onRemoveClick(): void {
    this.listService.removeFromList(this.itemForm.value.id);
    this.router.navigate(['/'], {relativeTo:this.route});
  }

  onCancelClick(): void {
    this.router.navigate(['/'], {relativeTo:this.route});
  }

}
