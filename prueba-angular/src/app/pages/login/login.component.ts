import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const credentials = this.form.value;

    this.authService.login(credentials).subscribe({
      next: (res) => alert('Login correcto'),
      error: () => alert('Credenciales incorrectas')
    });
  }

  hide: boolean = true;

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}