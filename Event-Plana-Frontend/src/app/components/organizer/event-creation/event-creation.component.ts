import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../../../services/event.service'; // Ensure you have this service
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-creation',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './event-creation.component.html',
    styleUrl: './event-creation.component.css'
  })

export class EventCreationComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.eventService.createEvent(this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
}
