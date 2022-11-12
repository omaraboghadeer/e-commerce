import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHelperService } from 'src/app/core/services/http-helper.service';
import { NgxSpinnerService } from "ngx-spinner";
import { LoginResponse } from 'src/app/core/interfaces/loginResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpHelperService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', Validators.required],
    })
  }

  form_submitted: boolean = false;
  get username() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  onSubmit() {
    this.form_submitted = true;
    if (this.loginForm.valid) {
      this.spinner.show();

      this.http.post('auth/login', this.loginForm.value)
      .subscribe(
        (res: LoginResponse) => {
          sessionStorage.setItem('token', res.token!)
          this.spinner.hide();
          this.router.navigateByUrl('/')
        },
        err => console.log(err)
      )
      return
    }
  }

}
