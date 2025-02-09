import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-organizer-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './organizer-profile.component.html',
  styleUrls: ['./organizer-profile.component.css']
})
export class OrganizerProfileComponent {
  profileForm: FormGroup;
  profileImage: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      profileImage: [null]
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.profileImage = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('username', this.profileForm.get('username')?.value);
    formData.append('email', this.profileForm.get('email')?.value);
    formData.append('password', this.profileForm.get('password')?.value);
    if (this.profileImage) {
      formData.append('profileImage', this.profileImage);
    }

    this.http.put('http://localhost:3000/api/users/profile', formData, {
      headers: {
        Authorization: 'Bearer YOUR_JWT_TOKEN'
      }
    }).subscribe(
      response => console.log('Profile updated successfully!', response),
      error => console.error('Error updating profile', error)
    );
  }
}
