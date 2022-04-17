import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { EditItemComponent } from "./pages/edit-item/edit-item.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "new", component: NewItemComponent},
  { path: "edit/:id", component: EditItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

