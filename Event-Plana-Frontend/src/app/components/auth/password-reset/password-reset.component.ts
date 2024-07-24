import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent]
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { // Inject Router
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      this.http.post('http://localhost:3000/api/users/password-reset/request', this.resetPasswordForm.value).subscribe({
        next: (response: any) => {
          this.successMessage = response.message;
          this.resetPasswordForm.reset();
          setTimeout(() => {
            this.successMessage = '';
            // Navigate to confirm-reset page
            this.router.navigate(['/confirm-reset']);
          }, 2000);
        },
        error: (err: any) => {
          console.error('Password reset request error:', err);
          this.errorMessage = err.error?.message || 'Password reset request failed. Please try again.';
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
        }
      });
    }
  }
}
