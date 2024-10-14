import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})

export class AuthService {
    constructor(private router: Router) {}

    register(userDetials: any){
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find((user:any) => user.email === userDetials.email)) {
            return { error: 'User already exists'};            
        }

        users.push(userDetials);
        localStorage.setItem( 'users',JSON.stringify(users));
        return {success: true};
    }
    login(email: string, password: string){
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        let user = users.find((user: any) => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('currentUser',email);
            return{ succes: true};

        } else {
            return {error: 'Invalid credentials'};
        } 
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    isAuthenticated(){
        return localStorage.getItem('currentUser') !== null;
    }
}