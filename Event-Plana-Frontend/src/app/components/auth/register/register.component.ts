import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { ModalComponent } from '../../shared/modal/modal.component'; // Ensure correct path

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, ModalComponent]
})
export class RegisterComponent {
  registerForm: FormGroup;
  modalMessage: string = '';
  isModalVisible: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/api/users/register', this.registerForm.value).subscribe({
        next: (response: any) => {
          this.showModal(response.message);

          // Navigate to login page after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/login']);
            this.closeModal();
          }, 2000);
        },
        error: (err: any) => {
          console.error('Registration error:', err);
          this.showModal(err.error?.message || 'Registration failed. Please try again.');
        }
      });
    }
  }

  showModal(message: string) {
    this.modalMessage = message;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
