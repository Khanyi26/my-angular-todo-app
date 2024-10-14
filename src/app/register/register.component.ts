// This handles storing te user in local storage

import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../auth.services';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  
  onRegister() {
    //Register logic here 
    const existingUser = JSON.parse(localStorage.getItem('user')!); // Checks if the user exists
    if (existingUser && existingUser.email === this.email){
      this.errorMessage = 'User already exists.';
    } else {
      const newUser = { name: this.name, email: this.email, password: this.password };
      localStorage.setItem('user', JSON.stringify(newUser)); // Save user details
      this.router.navigate(['/todo']);  // Redirect to todo page
    }
  }
}
