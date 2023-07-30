import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsersService} from "../../service/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
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
              private userService:UsersService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/dashboard']);
    }
  }

  login() {
    this.loginService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      this.userService.getUser(this.loginForm.get('email')?.value).subscribe(response=>{
        if (response !== null) {
          if (response.data.value.verified){
            // open authorizing page
            console.log("Authorized");
          }
          else{
            this.openSnackBar('Authorized','OK')
            this.cookieService.createUser(response.data.token);
            this.route.navigateByUrl('/dashboard/users');
          }
        }
      });
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
}
