import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { AppointmentService } from '../../services/appointment-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Appointment } from '../../models/appointment';

@Component({
  selector: 'app-appointments.page',
  imports: [CommonModule, Header, Footer],
  templateUrl: './appointments.page.html',
  styleUrl: './appointments.page.scss',
})
export class AppointmentsPage {


private appointmentService = inject(AppointmentService);

    constructor() {
        this.getAppointmentsFormAPI();
      }


  selectedAppointment: Appointment | null = null;

  // Datos de prueba de citas por si el API no responde o no está disponible
  appointmentsTest = [
    {
      id: '1',
      clientName: 'María García',
      petName: 'Luna',
      service: 'Vacunación',
      date: new Date('2025-10-20T10:00:00'),
      notes: 'Es un poco nerviosa con las agujas.'
    },
    {
      id: '2',
      clientName: 'Carlos Ruiz',
      petName: 'Rocky',
      service: 'Estética',
      date: new Date('2025-10-20T11:30:00'),
      notes: 'Corte de uñas y baño medicado.'
    },
    {
      id: '3',
      clientName: 'Ana Torres',
      petName: 'Simba',
      service: 'Consulta General',
      date: new Date('2025-10-21T09:00:00'),
      notes: 'No ha querido comer en 2 días.'
    } 
  ];

  // Señal que obtiene las citas desde el servicio, si no hay respuesta usa datos de prueba

  getAppointmentsFormAPI() {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        this.appointmentsAPI.set(data);
        
      },
      error: (err) => {
        this.appointmentsAPI.set(this.appointmentsTest);
        console.error('Error al obtener las citas desde el API:', err);
        console.error('Se muestra citas de prueba');
      }
    });
  }

  appointmentsAPI = signal<Appointment[]>([]);
 

  // Citas filtradas para no mostrar las eliminada
  appointments = computed( () => this.appointmentsAPI());


  // Función para ver detalles
  selectAppointment(appt: Appointment) {
    this.selectedAppointment = appt;
  }

  // Función para eliminar (marcar como atendida)
  deleteAppointment(id: string, event: Event) {
    // Evita que al hacer click en el botón se seleccione la cita también
    event.stopPropagation(); 
    
    // Filtramos la lista para quitar la cita con ese ID
    const confirmDelete = confirm('¿Confirmas que esta cita ya fue atendida?');
    if (confirmDelete) {

      this.appointmentService.deleteAppointment(id).subscribe({
        next: () => {
          console.log(`Cita con ID ${id} eliminada correctamente.`);

          this.appointmentsAPI.update( current => current.filter(a => a.id !== id) );
        },
        error: (err) => {
          console.error('Error al eliminar la cita:', err);
        }
      });

    
      
      // Si la cita borrada era la que estábamos viendo, limpiamos el panel
      console.log(this.selectedAppointment);
      if (this.selectedAppointment?.id === id) {
        this.selectedAppointment = null;
      }
    }
  }
  
}
