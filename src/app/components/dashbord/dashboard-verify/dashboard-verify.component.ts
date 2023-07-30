import { Component } from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, switchMap} from "rxjs/operators";
import {throwError} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard-verify',
  templateUrl: './dashboard-verify.component.html',
  styleUrls: ['./dashboard-verify.component.scss']
})
export class DashboardVerifyComponent {

  Image:any;
  Code:any;
  verified:boolean = false;
  selectedUser:any;

  verifyForm = new FormGroup({
    verifyCode: new FormControl(null,[
      Validators.required
    ])
  });

  constructor(private usersService:UsersService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    const mail = localStorage.getItem('email');
    this.showImage(mail);
  }

  showImage(email:any){
    this.usersService.getUser(email).subscribe(response=>{
      if (response.data !== null) {
        // console.log(response)
        if (email === response.data.value.email) {
          if (response.data.value.verified) {
            this.verified = true
          }
          else {
            this.usersService.addVerify().subscribe(response=>{
              this.Image = response.data.data_url;
              this.Code = response.data.secret;
            })
          }
        }
      }
    })
  }

  verifyCode() {
    const email1 = localStorage.getItem('email');
    this.usersService.getUser(email1).pipe(
      switchMap(response => {
        if (response.data !== null && response.data.value) {
          this.selectedUser = response.data.value;
          return this.usersService.verifyCode(this.verifyForm.get('verifyCode')?.value);
        } else {
          return throwError("User not found or data is null");
        }
      }),
      catchError(error => {
        console.log("Error occurred during API call:", error);
        return throwError("An error occurred during the verification process.");
      })
    ).subscribe(response => {
      if (response.data !== null) {
        console.log(response);
        if (response.success) {
          this.usersService.firstVerify({
            email: this.selectedUser.email,
            fullName: this.selectedUser.fullName,
            phone: this.selectedUser.phone,
            address: this.selectedUser.address
          }, this.selectedUser._id).subscribe(response => {
            this.openSnackBar('User Verified!', 'OK');
            this.verifyForm.reset();
            this.showImage(email1);
          }, error => {
            console.log(error);
          });
        }
      }
    }, error => {
      console.log(error);
    });
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
