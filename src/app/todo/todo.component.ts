// This manages task creation, deletion, and task persistence in local storage

import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent  {
  tasks: {name: string, priority:  string} [] = [];
  taskName = "";
  priority = "Medium";
  dueDate: any;
  priorities = ['High','Medium','Low'];

  constructor () {

    this.loadTasks();   
  }

  //Add new tasks 
  addTask() {
    const task = { name: this.taskName, priority: this.priority, dueDate:  this.dueDate};
    this.tasks.push(task);
    this.saveTasks();
    this.taskName = '';
    this.priority = '';
    this.dueDate = '';
  }

  //Delete unwanted tasks 
  deleteTask(taskToDelete: any) {
   this.tasks = this.tasks.filter(tasks => tasks !== taskToDelete);
    this.saveTasks();
  }

  //Save existing task to the localstorage
  saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

  //Loads new tasks to the local storage
  loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = storedTasks;
  }

  // For overdue tasks
  isOverdue(dueDate: string): boolean {
    return new Date(dueDate) < new Date();
  }

  // For completed tasks
  markAsCompleted(task: any){
   task.completed = true;
    this.saveTasks();
  }

}
