import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditTaskComponent } from "./pages/edit-task/edit-task.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "new", component: NewTaskComponent},
  { path: "edit/:id", component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

