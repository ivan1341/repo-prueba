import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
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
