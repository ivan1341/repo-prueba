import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page/home.page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'agendar-cita', loadComponent: () => import('./pages/new-appointment.page/new-appointment.page').then(m => m.NewAppointmentPage)},
    {path: 'citas', loadComponent: () => import('./pages/appointments.page/appointments.page').then(m => m.AppointmentsPage)},
    {path: '**', redirectTo: ''}
];
