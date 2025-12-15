import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  // Datos para el Login
  loginData = {
    email: '',
    password: ''
  };

  onLogin() {
    console.log('Intentando iniciar sesión con:', this.loginData);
    // Aquí iría tu lógica de autenticación
  }
}
