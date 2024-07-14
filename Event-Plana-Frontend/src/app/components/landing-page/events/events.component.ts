import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EventsComponent {
  events = [
    {
      title: 'Music Concert',
      category: 'Music',
      date: 'August 20, 2024',
      location: 'City Stadium',
      image: 'concert3.jpeg',
      description: 'Join us for a night of spectacular music and entertainment!'
    },
    {
      title: 'Tech Conference',
      category: 'Technology',
      date: 'September 15, 2024',
      location: 'Tech Park',
      image: 'tech.jpeg',
      description: 'Explore the latest trends in technology at our annual conference.'
    },
    {
      title: 'Art Exhibition',
      category: 'Art',
      date: 'October 5, 2024',
      location: 'Art Gallery',
      image: 'art.jpeg',
      description: 'Experience the beauty of modern art at our exclusive exhibition.'
    },
    {
      title: 'Food Festival',
      category: 'Food',
      date: 'November 10, 2024',
      location: 'Central Park',
      image: 'food.jpeg',
      description: 'Taste delicious foods from around the world at our annual food festival.'
    },
    {
      title: 'Film Screening',
      category: 'Film',
      date: 'December 1, 2024',
      location: 'Cinema Hall',
      image: 'film.jpeg',
      description: 'Watch critically acclaimed films at our exclusive screening event.'
    },
    {
      title: 'Startup Meetup',
      category: 'Business',
      date: 'January 15, 2025',
      location: 'Business Center',
      image: 'startup.jpeg',
      description: 'Network with like-minded entrepreneurs at our startup meetup.'
    },
    {
      title: 'Startup Meetup',
      category: 'Business',
      date: 'January 15, 2025',
      location: 'Business Center',
      image: 'startup.jpeg',
      description: 'Network with like-minded entrepreneurs at our startup meetup.'
    },
    {
      title: 'Startup Meetup',
      category: 'Business',
      date: 'January 15, 2025',
      location: 'Business Center',
      image: 'startup.jpeg',
      description: 'Network with like-minded entrepreneurs at our startup meetup.'
    }
  ];
}
