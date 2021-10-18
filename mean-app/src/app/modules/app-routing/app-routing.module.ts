import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from 'src/app/components/new-todo/new-todo.component';
import { TodosPanelComponent } from 'src/app/components/todos-panel/todos-panel.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewTodoComponent,
  },
  {
    path: 'todos',
    component: TodosPanelComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
