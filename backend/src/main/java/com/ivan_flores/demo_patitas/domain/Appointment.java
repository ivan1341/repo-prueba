package com.ivan_flores.demo_patitas.domain;

import java.time.LocalDateTime;
import java.util.UUID;

public class Appointment {

    // Atributos

    private UUID id;
    private String clientName;
    private String petName;
    private String service;
    private LocalDateTime date;
    private String notes;


    public Appointment(UUID id, String clientName, String petName, String service, LocalDateTime date, String notes) {
        this.id = id;
        this.clientName = clientName;
        this.petName = petName;
        this.service = service;
        this.date = date;
        this.notes = notes;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }
}
