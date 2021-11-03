import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosPanelComponent } from './components/todos-panel/todos-panel.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPanelComponent,
    NewTodoComponent,
    HeaderComponent,
    TodoCardComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
