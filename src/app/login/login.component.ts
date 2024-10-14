// This handles the form submission and authentication logic.

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor( private router:Router) {}

  onLogin() {
    //Authentication logic here
    const storedUser = JSON.parse(localStorage.getItem('user')!)
    if (storedUser && storedUser.email === this.email && storedUser.password === this.password) {
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/todo']); // It takes to the todo page
    } else {
      this.errorMessage = 'Invalid credentials'; // Error message for credentials
    }
  }
}
