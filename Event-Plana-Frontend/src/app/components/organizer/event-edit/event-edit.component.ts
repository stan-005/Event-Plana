import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      ticketPrice: [0, Validators.required],
      image: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventService.getEventById(Number(id)).subscribe(event => {
        this.eventForm.patchValue(event);
      });
    }
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const updatedEvent: Event = this.eventForm.value;
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.eventService.updateEvent(Number(id), updatedEvent).subscribe(() => {
          this.router.navigate(['/events']);
        });
      }
    }
  }
}
