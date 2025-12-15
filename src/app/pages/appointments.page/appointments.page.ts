import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

interface Appointment {
  id: number;
  clientName: string;
  petName: string;
  service: string;
  date: Date;
  notes: string;
}

@Component({
  selector: 'app-appointments.page',
  imports: [CommonModule, Header, Footer],
  templateUrl: './appointments.page.html',
  styleUrl: './appointments.page.scss',
})
export class AppointmentsPage {


  selectedAppointment: Appointment | null = null;

  // Datos de prueba
  appointments: Appointment[] = [
    {
      id: 1,
      clientName: 'María García',
      petName: 'Luna',
      service: 'Vacunación',
      date: new Date('2025-10-20T10:00:00'),
      notes: 'Es un poco nerviosa con las agujas.'
    },
    {
      id: 2,
      clientName: 'Carlos Ruiz',
      petName: 'Rocky',
      service: 'Estética',
      date: new Date('2025-10-20T11:30:00'),
      notes: 'Corte de uñas y baño medicado.'
    },
    {
      id: 3,
      clientName: 'Ana Torres',
      petName: 'Simba',
      service: 'Consulta General',
      date: new Date('2025-10-21T09:00:00'),
      notes: 'No ha querido comer en 2 días.'
    }
  ];

  // Función para ver detalles
  selectAppointment(appt: Appointment) {
    this.selectedAppointment = appt;
  }

  // Función para eliminar (marcar como atendida)
  deleteAppointment(id: number, event: Event) {
    // Evita que al hacer click en el botón se seleccione la cita también
    event.stopPropagation(); 
    
    // Filtramos la lista para quitar la cita con ese ID
    const confirmDelete = confirm('¿Confirmas que esta cita ya fue atendida?');
    if (confirmDelete) {
      this.appointments = this.appointments.filter(a => a.id !== id);
      
      // Si la cita borrada era la que estábamos viendo, limpiamos el panel
      if (this.selectedAppointment?.id === id) {
        this.selectedAppointment = null;
      }
    }
  }
  
}
