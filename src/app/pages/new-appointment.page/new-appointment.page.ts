import { Component, inject } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment-service';

@Component({
  selector: 'app-new-appointment.page',
  imports: [ReactiveFormsModule, Header, Footer],
  templateUrl: './new-appointment.page.html',
  styleUrl: './new-appointment.page.scss',
})
export class NewAppointmentPage {
  
  appointmentService = inject(AppointmentService);

  appointmentForm: FormGroup;
  isSubmitted = false;

  servicesList = [
    'Consulta General', 'Vacunación', 'Estética', 'Cirugía'
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      // Campos básicos para agendar una cita
      clientName: ['', [Validators.required, Validators.minLength(3)]],
      petName: ['', [Validators.required]],
      date: ['', Validators.required],
      service: ['Consulta General', Validators.required],
      notes: [''] 
    });
  }



  onSubmit() {
    this.isSubmitted = true;
    if (this.appointmentForm.valid) {
      console.log('Cita Agendada:', this.appointmentForm.value);
     
      // Aquí se llama al servicio para guardar la cita en el backend
      this.appointmentService.createAppointment(this.appointmentForm.value).subscribe({
        next: (response) => {
          console.log('Cita guardada en el servidor:', response);
           alert(`¡Listo! Cita creada para ${this.appointmentForm.value.petName}`);
        },
        error: (err) => {
          console.error('Error al guardar la cita:', err);
        }
      });

    } else {
      console.log('Formulario inválido');
    }
  }

  // Helper para ver errores en el HTML
  hasError(field: string): boolean {
    const control = this.appointmentForm.get(field);
    return !!(control?.invalid && (control?.dirty || control?.touched || this.isSubmitted));
  }
}
