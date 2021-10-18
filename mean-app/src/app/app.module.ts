import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosPanelComponent } from './components/todos-panel/todos-panel.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosPanelComponent,
    NewTodoComponent,
    HeaderComponent,
    TodoCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
