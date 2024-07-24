import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Ensure correct path
import { HeaderComponent } from '../../shared/header/header.component';
import { ModalComponent } from '../../shared/modal/modal.component'; // Ensure correct path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, ModalComponent]
})
export class LoginComponent {
  loginForm: FormGroup;
  modalMessage: string = '';
  isModalVisible: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Login response:', response);
          
          const userRole = response.user.role; // Assuming response contains user role
          console.log(userRole);
          
          // Show success modal
          this.showModal('Login successful');
          
          // Navigate based on role after a short delay to show the modal
          setTimeout(() => {
            if (userRole === 'user') {
              this.router.navigate(['/user/dashboard']);
            } else if (userRole === 'admin') {
              this.router.navigate(['/admin/dashboard']);
            } else if (userRole === 'organizer') {
              this.router.navigate(['/organizer/dashboard']);
            } else {
              console.error('Unknown role');
            }
          }, 2000);
        },
        (error) => {
          console.error('Login error:', error);
          // Show error modal
          this.showModal('Login failed. Please try again.');
        }
      );
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
