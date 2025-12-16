package com.ivan_flores.demo_patitas.controllers;

import com.ivan_flores.demo_patitas.domain.Appointment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/v1/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {


    // Esta lista tiene que ir en el Service
    private final   List<Appointment> appointments = new ArrayList<>(Arrays.asList(
            new Appointment( UUID.randomUUID(), "Ivan Flores", "Firulais", "Vacuna", LocalDateTime.of(2025, 12,15, 14,30), "Alérgico a la ampicilina"),
            new Appointment( UUID.randomUUID(), "Karla Flores", "Speddy", "Rayos X", LocalDateTime.of(2025, 7,15, 14,30), "Alérgico a la ampicilina"),
            new Appointment( UUID.randomUUID(), "Gabriel Flores", "Bombon", "Corte de pelo", LocalDateTime.of(2026, 1,14, 14,30), "Alérgico a la ampicilina")


    ));

    @GetMapping
    public ResponseEntity<?> getAppointments(){
        return ResponseEntity.status(HttpStatus.OK).body(appointments);
    }

    @PostMapping
    public  ResponseEntity<?> postAppointment(@RequestBody Appointment appointment){
        appointment.setId(UUID.randomUUID());
        appointments.add(appointment);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(appointment.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable UUID id){
        boolean removed = appointments.removeIf(a -> a.getId().equals(id));
        if(removed){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
        
    }

}
