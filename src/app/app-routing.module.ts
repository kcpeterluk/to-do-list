import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NewItemComponent } from './pages/new-item/new-item.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "new", component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

