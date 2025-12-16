import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private http = inject(HttpClient);

  // Métodos para manejar citas (CRUD) aquí

  // Microservicio de springboot
  private apiURL = 'http://localhost:8080/api/v1/appointments';

  // GET: Obtener todas las citas
  getAppointments(): Observable< Appointment[]> {
    return this.http.get< Appointment[]>(this.apiURL);
  }


  // POST: Crear una nueva cita
  createAppointment(appointmentData: any) {
    return this.http.post(this.apiURL, appointmentData);
  }



  // DELETE: Eliminar una cita por ID
  deleteAppointment(appointmentId: string) {
    return this.http.delete(this.apiURL + `/${appointmentId}`);
  }



}
