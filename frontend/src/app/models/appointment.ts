export interface Appointment {
    id: string;
    clientName: string;
    petName: string;
    service: string;
    date: Date;
    notes?: string;

}