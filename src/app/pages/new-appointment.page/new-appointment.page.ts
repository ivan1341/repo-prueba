import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-appointment.page',
  imports: [ReactiveFormsModule, Header, Footer],
  templateUrl: './new-appointment.page.html',
  styleUrl: './new-appointment.page.scss',
})
export class NewAppointmentPage {
  
appointmentForm: FormGroup;
  isSubmitted = false;

  servicesList = [
    'Consulta General', 'Vacunación', 'Estética', 'Cirugía'
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      // Tus campos obligatorios solicitados
      clientName: ['', [Validators.required, Validators.minLength(3)]],
      petName: ['', [Validators.required]],
      
      // Campos adicionales sugeridos para una cita completa
      date: ['', Validators.required],
      service: ['Consulta General', Validators.required],
      notes: [''] // Opcional
    });
  }



  onSubmit() {
    this.isSubmitted = true;
    if (this.appointmentForm.valid) {
      console.log('Cita Agendada:', this.appointmentForm.value);
      alert(`¡Listo! Cita creada para ${this.appointmentForm.value.petName}`);
      // Aquí llamarías a tu servicio de backend
    } else {
      console.log('Formulario inválido');
    }
  }

  // Helper para ver errores en el HTML fácilmente
  hasError(field: string): boolean {
    const control = this.appointmentForm.get(field);
    return !!(control?.invalid && (control?.dirty || control?.touched || this.isSubmitted));
  }
}
