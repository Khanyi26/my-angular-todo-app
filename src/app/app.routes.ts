// Define routes for each page(login, register, todo)

import { RouterModule,Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { AppComponent } from './app.component';
import { AuthGuard } from '../auth.guard';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Define routes
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'todo', component: TodoComponent}, //Protected route
    {path: '', redirectTo: '/login', pathMatch: 'full'}

];

// Importing, Declaring and Exporting  modules and components
@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule, FormsModule],
    exports: [RouterModule],
    bootstrap: [RegisterComponent],
    providers: [],
    declarations: [ LoginComponent, RegisterComponent, TodoComponent], 
})


export class AppRoutingModule {}
