import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = '';
  email: string= '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router){}


  onRegister() {
    if (this.password === this.confirmPassword) {
      const credentials = {
        userName: this.userName,
        email: this.email,
        password: this.password
      };


      localStorage.setItem('userCredentials', JSON.stringify(credentials));
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match!');
    }
  }
}
