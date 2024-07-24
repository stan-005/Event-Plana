import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-confirm-reset',
  templateUrl: './confirm-reset.component.html',
  styleUrls: ['./confirm-reset.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent]
})
export class ConfirmResetComponent {
  confirmResetForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.confirmResetForm = this.fb.group({
      token: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onConfirmReset() {
    if (this.confirmResetForm.valid) {
      this.http.post('http://localhost:3000/api/users/password-reset/reset', this.confirmResetForm.value).subscribe({
        next: (response: any) => {
          this.successMessage = response.message;

          // Navigate to login page after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/login']);
            this.successMessage = '';
          }, 2000);
        },
        error: (err: any) => {
          console.error('Password reset error:', err);
          this.errorMessage = err.error?.message || 'Password reset failed. Please try again.';
          setTimeout(() => {
            this.errorMessage = '';
          }, 2000);
        }
      });
    }
  }
}
