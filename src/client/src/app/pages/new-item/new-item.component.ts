import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.sass']
})
export class NewItemComponent implements OnInit {

  itemForm = this.formBuilder.group({
    description: ''
  });

  constructor(
    private listService: ListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    let item: Task = {
      Id: 0,
      Description: this.itemForm.value.description,
      Done: false
    };
    this.listService.addToList(item);
    this.router.navigate(['/'], {relativeTo:this.route});
  }

  onCancelClick(): void {
    this.router.navigate(['/'], {relativeTo:this.route});
  }
  
}
