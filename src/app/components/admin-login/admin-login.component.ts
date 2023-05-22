import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private loginService:LoginService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/admin-2000-private-access']);
    }
  }

  login() {
    this.loginService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      this.openSnackBar('Authorized','OK')
      this.cookieService.createUser(response.data.token);
      this.route.navigateByUrl('/admin-2000-private-access');

      // @ts-ignore
      localStorage.setItem('email',this.loginForm.get('email')?.value)
    },error => {
      this.openSnackBar('Logging Failed! try again!','OK')
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

  onSignIn(googleUser: any) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
