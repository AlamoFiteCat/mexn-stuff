import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NewTodoComponent } from 'src/app/components/new-todo/new-todo.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
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
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
