import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Login } from "../../components/login/login";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home.page',
  imports: [Header, Login, Footer],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {

  // Datos de los Servicios
  services = [
    {
      id: 1,
      title: 'Consultas Generales',
      description: 'Revisión completa para asegurar la salud de tu mejor amigo.',
      icon: '🩺'
    },
    {
      id: 2,
      title: 'Vacunación y Desparasitación',
      description: 'Mantén su calendario de salud al día con los mejores productos.',
      icon: '💉'
    },
    {
      id: 3,
      title: 'Estética y Baño',
      description: 'Corte de pelo, baño medicado y limpieza para que luzcan genial.',
      icon: '✂️'
    },
    {
      id: 4,
      title: 'Cirugía y Rayos X',
      description: 'Equipamiento moderno para diagnósticos precisos y seguros.',
      icon: '🦴'
    }
  ];

}
