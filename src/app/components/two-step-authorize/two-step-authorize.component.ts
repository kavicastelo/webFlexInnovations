import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {UsersService} from "../../service/users.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-two-step-authorize',
  templateUrl: './two-step-authorize.component.html',
  styleUrls: ['./two-step-authorize.component.scss']
})
export class TwoStepAuthorizeComponent {

  errorMessage:boolean = false;
  attemptsCounter = 0;
  token:any;

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

  authorized(){
    const code:HTMLInputElement = (<HTMLInputElement>document.getElementById('verify_code'));

    this.userService.getUser(localStorage.getItem("authEmail")).subscribe(response=>{
      if (response !== null) {
        this.token = response.data.token;
      }
    })

    this.userService.verifyCode(parseInt(code?.value)).pipe(
      catchError(error => {
        console.log("Error occurred during API call:", error);
        return throwError("An error occurred during verification.");
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log(response);
        if (response.success && response.success !== undefined){
          code.value = '';
          this.cookieService.createUser(this.token);
          this.route.navigateByUrl('/dashboard/users');
        }
        else {
          this.attemptsCounter++;
          if (this.attemptsCounter < 6) {
            this.errorMessage = true;
            code.value = '';
          } else {
            this.errorMessage = false;
            this.attemptsCounter = 0; // Reset the attempts counter
            alert("Your Authentication Attempts Exceeded! Try again after 2 minutes.");
            code.value = '';
            code.disabled;

            // Disable the input field and retry button for 2 minutes
            this.disableInputAndRetry(120);
          }
        }
      }
    });
  }

  disableInputAndRetry(seconds: number) {
    const inputElement = <HTMLInputElement>document.getElementById('verify_code');
    inputElement.disabled = true;

    // Enable the input and retry button after the specified time (in seconds)
    setTimeout(() => {
      inputElement.disabled = false;
      this.errorMessage = false;
    }, seconds * 1000);
  }

}
