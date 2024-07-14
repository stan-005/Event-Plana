import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
      // Add your reset password logic here
    }
  }
}
