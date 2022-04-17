import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass']
})
export class EditItemComponent implements OnInit {

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
    const idFromRoute = Number(routeParams.get('id'));
    const item = this.listService.getItem(idFromRoute);
    if (item)
      this.itemForm = this.formBuilder.group({
        id: item.Id,
        description: item.Description
      });
  }

  onSubmit(): void {
    let item: Item = {
      Id: this.itemForm.value.id,
      Description: this.itemForm.value.description
    };
    this.listService.updateItem(item);
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
